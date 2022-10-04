package com.ssafy.gorda.dto.controllerdto.request;

import lombok.Data;

@Data
public class LoginUserRequestDto {

    private String userAccount;
    private String userNickname;
    private double userAmount;
    private int userScore;
    private String userRole;

}
