package org.korit.board_back.dto.auth.reponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.korit.board_back.entity.User;

@Data
@AllArgsConstructor
public class LoginResponseDto {
    private User user;
    private String token;
    private int exprTime;
}
