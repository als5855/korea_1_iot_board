package org.korit.board_back.service;


import org.korit.board_back.dto.auth.reponse.ResponseDto;
import org.korit.board_back.dto.user.request.UpdateUserRequestDto;
import org.korit.board_back.dto.user.response.UserResponseDto;

//@Service
/*
*  UserService
* - 사용자 정보 조회, 수정, 삭제와 관련된 메서드 정의
* */
public interface UserService {

    /*
    * 상용자 정보를 죄회하는 메서드
    * @param - userId 현재 인증된 사용자의 ID
    * @return - ResponseDto<UserResponseDto> 사용자 정보를 담은 응답 객체
    * */
    ResponseDto<UserResponseDto> getUserInfo(String userId);

    /*
     * 상용자 정보를 수정하는 메서드
     * @param - userId 현재 인증된 사용자의 ID
     * @param - dto 사용자 정보를 업데이트에 필요한 데이터를 담은 객체
     * @return - ResponseDto<UserResponseDto> 사용자 정보를 담은 응답 객체
     * */

    ResponseDto<UserResponseDto> updateUser(String userId, UpdateUserRequestDto dto);

    /*
     * 상용자 정보를 죄회하는 메서드
     * @param - userId 현재 인증된 사용자의 ID
     * @return - ResponseDto<Void> 응답 결과만을 담은 객체
     * */
    ResponseDto<Void> deleteUser(String userid);
}
