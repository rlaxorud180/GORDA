package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.LoginUserRequestDto;
import com.ssafy.gorda.dto.controllerdto.response.LoginUserResponseDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadMyDonationResponseDto;
import com.ssafy.gorda.service.UserService;
import com.ssafy.gorda.util.SHA256;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
@Slf4j
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public LoginUserResponseDto login(@RequestBody LoginUserRequestDto request) {

        User user = userService.findByAccount(request.getUserAccount());

        if (user==null) {             //미등록 유저일 때

            User newUser = User.builder()
                    .userAccount(request.getUserAccount())
                    .userNickname(request.getUserNickname())
                    .userAmount(request.getUserAmount())
                    .userRole(request.getUserRole())
                    .userScore(request.getUserScore())
                    .build();

            userService. regist(newUser);

            return new LoginUserResponseDto(newUser);
        }

        return new LoginUserResponseDto(user);
    }

    @GetMapping("{userAccount}")
    public ResultDto readUserByAccount(@PathVariable ("userAccount") String userAccount) {

        User user = userService.findByAccount(userAccount);

        return new ResultDto(user);
    }

}