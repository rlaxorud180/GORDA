package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.MyDonation;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistDonationRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistMyDonationRequestDto;
import com.ssafy.gorda.service.MyDonationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/my_donation")
@Slf4j

public class MyDonationController {

    private final MyDonationService myDonationService;

    // 개인별 기부 항목 만들기
    public MessageResponseDto regist(RegistMyDonationRequestDto request) {

        MyDonation tempMyDonation = MyDonation.builder()
                .user(request.getUser())
                .donation(request.getDonation())
                .myDonationContent(request.getMyDonationContent())
                .myDonationDate(LocalDateTime.now())
                .build();

        myDonationService.regist(tempMyDonation);

        return new MessageResponseDto("개인별 기부 항목 작성 완료");

    }

}
