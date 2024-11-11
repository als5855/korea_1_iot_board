package org.korit.board_back.dto.user.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter //개별적인 사용을 위해 생성자 아닌 setter 사용
public class UpdateUserRequestDto {
    private String email;
    private String name;
    private String phone;
}
