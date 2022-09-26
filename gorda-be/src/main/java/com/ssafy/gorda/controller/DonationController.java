package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistDonationRequestDto;
import com.ssafy.gorda.service.DonationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/donation")
@Slf4j

public class DonationController {

    private final DonationService donationService;

    //도네이션 등록

    @PostMapping("/regist")
    public MessageResponseDto regist(RegistDonationRequestDto request) {

        Donation tempDonation = Donation.builder()
                .foundation(request.getFoundation())
                .donationContent(request.getDonationSubject())
                .donationContent(request.getDonationContent())
                .donationStartDate(request.getDonationStartDate())
                .donationEndDate(request.getDonationEndDate())
                .build();

        donationService.regist(tempDonation);

        return new MessageResponseDto("기부 항목 작성 완료");

    }

    //도네이션 수정

    //도네이션 정보 가져오기

    //도네이션 삭제

}
