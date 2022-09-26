package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.domain.MyDonation;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistMyBadgeRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistMyDonationRequestDto;
import com.ssafy.gorda.service.BadgeService;
import com.ssafy.gorda.service.MyBadgeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/my_badge")
@Slf4j

public class MyBadgeController {

    private final MyBadgeService myBadgeService;

    // 개인별 획득 뱃지 만들기
    public MessageResponseDto regist(RegistMyBadgeRequestDto request) {

        MyBadge tempMyBadge = MyBadge.builder()
                .badge(request.getBadge())
                .user(request.getUser())
                .myBadgeDate(LocalDateTime.now())
                .build();

        myBadgeService.regist(tempMyBadge);

        return new MessageResponseDto("개인별 획득 뱃지 작성 완료");

    }

}
