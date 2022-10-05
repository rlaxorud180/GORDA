package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.LoginUserRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.ModifyUserDonateLevelRequestDto;
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
                    .userVoteCount(request.getUserVoteCount())
                    .build();

            userService. regist(newUser);

            return new LoginUserResponseDto(newUser);
        }

        return new LoginUserResponseDto(user);
    }

    @GetMapping("/{userIdx}")
    public ResultDto readUserByAccount(@PathVariable ("userIdx") String userIdx) {

        User user = userService.findByIdx(userIdx);

        return new ResultDto(user);
    }

    @PutMapping("/donate/{userIdx}")
    public MessageResponseDto modifyUserDonateLevel (@PathVariable ("userIdx") String userIdx, @RequestBody ModifyUserDonateLevelRequestDto request){

        userService.addUserDonationLevel(userIdx, request.getDonateAmount());

        return new MessageResponseDto("기부 금액 적용 완료");
    }

    @PutMapping("/vote/{userIdx}")
    public MessageResponseDto modifyUserVoteCount (@PathVariable ("userIdx") String userIdx){

        userService.addUserVoteCount(userIdx);

        return new MessageResponseDto("투표 횟수 증가");
    }


}