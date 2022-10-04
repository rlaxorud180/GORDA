package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.MyDonation;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistDonationRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistMyDonationRequestDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadMyBadgeResponseDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadMyDonationResponseDto;
import com.ssafy.gorda.service.DonationService;
import com.ssafy.gorda.service.MyDonationService;
import com.ssafy.gorda.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/my_donation")
@Slf4j

public class MyDonationController {

    private final MyDonationService myDonationService;
    private final UserService userService;
    private final DonationService donationService;

    // 개인별 기부 항목 만들기
    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistMyDonationRequestDto request) {

        MyDonation tempMyDonation = MyDonation.builder()
                .user(userService.findByIdx(request.getUserIdx()))
                .donation(donationService.findByIdx(request.getDonationIdx()))
                .myDonationName(request.getMyDonationName())
                .myDonationAmount(request.getMyDonationAmount())
                .myDonationDate(LocalDateTime.now())
                .build();

        myDonationService.regist(tempMyDonation);

        return new MessageResponseDto("개인별 기부 항목 작성 완료");

    }

    //개인별 기부 항목 불러오기
    @GetMapping("/user/{userIdx}")
    public ResultDto readMyDonation(@PathVariable ("userIdx") String userIdx) {

        List<ReadMyDonationResponseDto> myDonationList = new ArrayList<>();

        myDonationList = myDonationService.findByUserIdx(userIdx).stream().map(myDonation -> new ReadMyDonationResponseDto(myDonation)).collect(Collectors.toList());

        return new ResultDto(myDonationList);
    }

}
