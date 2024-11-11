package org.korit.board_back.dto.user.response;

import lombok.Getter;
import org.korit.board_back.entity.User;

@Getter
public class UserResponseDto {
    private String userId;
    private String email;
    private String name;
    private String phone;
    private String gender;

    public UserResponseDto(User user) {// 생성자가 setter역할 무조건 이생성자를 통해서 setter.
        this.userId = user.getUserId();
        this.email = user.getEmail();
        this.name = user.getName();
        this.phone = user.getPhone();
        this.gender = user.getGender();
    }
}
