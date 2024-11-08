package org.korit.board_back.service;

import jakarta.validation.Valid;
import org.korit.board_back.dto.auth.reponse.LoginResponseDto;
import org.korit.board_back.dto.auth.reponse.ResponseDto;
import org.korit.board_back.dto.auth.reponse.SignUpResponseDto;
import org.korit.board_back.dto.auth.request.LoginRequestDto;
import org.korit.board_back.dto.auth.request.SignUpRequestDto;
import org.springframework.http.ResponseEntity;

public interface AuthService {

    ResponseDto<SignUpResponseDto> signUp(SignUpRequestDto dto);
    ResponseDto<LoginResponseDto> login(LoginRequestDto dto);

}
