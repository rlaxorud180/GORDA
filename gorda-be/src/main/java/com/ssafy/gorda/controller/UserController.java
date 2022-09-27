package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.controllerdto.response.LoginUserResponseDto;
import com.ssafy.gorda.service.UserService;
import com.ssafy.gorda.util.SHA256;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@Slf4j
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public LoginUserResponseDto login(String userAccount) {

        User user = userService.findByAccount(userAccount);

        if (user==null) {             //미등록 유저일 때

            User newUser = User.builder()
                    .userAccount(userAccount)
                    .userNickname(userService.makeNickname())
                    .build();

            userService.regist (newUser);

            return new LoginUserResponseDto(newUser);
        }

        return new LoginUserResponseDto(user);
    }

}
