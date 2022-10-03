package com.ssafy.gorda.dto.controllerdto.request;

import lombok.Data;

@Data
public class LoginUserRequestDto {

    private String userIdx;
    private String userAccount;
    private String userNickname;
    private int userAmount;
    private int userScore;
    private String userRole;

}
