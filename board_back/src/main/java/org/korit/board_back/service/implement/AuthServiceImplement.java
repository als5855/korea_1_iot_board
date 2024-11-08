package org.korit.board_back.service.implement;

import lombok.RequiredArgsConstructor;
import org.apache.commons.validator.routines.EmailValidator;
import org.korit.board_back.common.ResponseMessage;
import org.korit.board_back.dto.auth.reponse.LoginResponseDto;
import org.korit.board_back.dto.auth.reponse.ResponseDto;
import org.korit.board_back.dto.auth.reponse.SignUpResponseDto;
import org.korit.board_back.dto.auth.request.LoginRequestDto;
import org.korit.board_back.dto.auth.request.SignUpRequestDto;
import org.korit.board_back.entity.User;
import org.korit.board_back.provider.JwtProvider;
import org.korit.board_back.repository.UserRepository;
import org.korit.board_back.service.AuthService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImplement implements AuthService {


    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptpasswordEncoder;
    private final JwtProvider jwtProvider;

    @Override
    public ResponseDto<SignUpResponseDto> signUp(SignUpRequestDto dto) {
       String userId = dto.getUserId();
       String password = dto.getPassword();
       String confirmPassword = dto.getConfirmPassword();
       String name = dto.getName();
       String email = dto.getEmail();
       String phone = dto.getPhone();
       String gender = dto.getGender();
       // SignUpRequestDto에서 요청에 필요한 요소들을 가져와서 할당한다.


       SignUpResponseDto data = null;//체계틀 만들기, 데이터를 비운다??

        // 1. 유효성 검사 //
        if (userId == null || userId.isEmpty()) { // 공간(그릇)이 없음 || 공간은 있는데 든게 없음
            // INVALID_USER_ID
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        if (password == null || password.isEmpty() || confirmPassword == null || confirmPassword.isEmpty()) {
            // INVALID_PASSWORD
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        if(!password.equals(confirmPassword)) {
            // NOT_MATCH_PASSWORD_CONFIRMPASSWORD
            return ResponseDto.setFailed((ResponseMessage.NOT_MATCH_PASSWORD));
        }

        if(password.length() < 8 || !password.matches(".*[A-Z.*]") || !password.matches(".%\\d.*")){
            // .*[A-Z.*] : 하나 이상의 대문자 포함
            // .%\d.* : 하나 이상의 숫자를 포함

            // INVALID_PASSWORD
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        if(name == null || name.isEmpty()) {
            // INVAILD_NAME
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        if(email == null || email.isEmpty() || !EmailValidator.getInstance().isValid(email)) {//EmailValidater: 이메일 형식
            // INVALID_EMAIL
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        if(phone == null || phone.isEmpty() ||!phone.matches("[0-9]{10,15}$")) {
            // [0-9]{10,15}$ : 10자에서 15자 사이의 숫자로만 이루어짐

            // INVALID_PHONE
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        if (gender != null && !gender.matches("M|F")) {
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        // 2. 중복 체크 //
       if (userRepository.existsByUserId(userId)) {
           return ResponseDto.setFailed(ResponseMessage.EXIST_USER);
       }

       if (userRepository.existsByEmail(email)) {
           return ResponseDto.setFailed(ResponseMessage.EXIST_USER);
       }

       if (password.equals(confirmPassword)) {
           return ResponseDto.setFailed(ResponseMessage.NOT_MATCH_PASSWORD);
       }

       try {
           String encodedPassword = bCryptpasswordEncoder.encode(password);
           User user = User.builder()
                   .userId(userId)
                   .password(encodedPassword)
                   .email(email)
                   .name(name)
                   .phone(phone)
                   .gender(gender)//(gender != null ? gender : "기본값")
                   .build();
           userRepository.save(user);
           data = new SignUpResponseDto(user);

       } catch (Exception e) {
           e.printStackTrace();
           return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
       }

       return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    @Override
    public ResponseDto<LoginResponseDto> login(LoginRequestDto dto) {
        String userId = dto.getUserId();
        String password = dto.getPassword();

        LoginResponseDto data = null;

        // 1. 유효성검사
        if (userId == null || userId.isEmpty()) {
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        if(password == null || password.isEmpty()) {
            return ResponseDto.setFailed(ResponseMessage.VALIDATION_FAIL);
        }

        try {

           User user  = userRepository.finByUserId(userId)
                   .orElseThrow(null);//if 조건문으로 에러를 발생
           if( user == null) {
               return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_USER);
           }
           if(!bCryptpasswordEncoder.matches(password, user.getPassword())) {
               return ResponseDto.setFailed(ResponseMessage.NOT_MATCH_PASSWORD);
           }

           String token = jwtProvider.generateJwtToken(userId);
           int exprTime = jwtProvider.getExpiration();
           data = new LoginResponseDto(user, token, exprTime);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }

        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }
}
