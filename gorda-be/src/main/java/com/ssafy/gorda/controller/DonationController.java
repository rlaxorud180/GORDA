package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistDonationRequestDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadBadgeResponseDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadDonationResponseDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadFoundationResponseDto;
import com.ssafy.gorda.service.DonationService;
import com.ssafy.gorda.service.FoundationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/donation")
@Slf4j

public class DonationController {

    private final DonationService donationService;
    private final FoundationService foundationService;

    //도네이션 등록
    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistDonationRequestDto request) {

        Donation tempDonation = Donation.builder()
                .foundation(foundationService.findByIdx(request.getFoundationIdx()))
                .donationLogo(request.getDonationLogo())
                .donationName(request.getDonationName())
                .donationSubject(request.getDonationSubject())
                .donationAccount(request.getDonationAccount())
                .donationContent(request.getDonationContent())
                .donationLike(request.getDonationLike())
                .donationTargetEth(request.getDonationTargetEth())
                .donationCurrentEth(request.getDonationCurrentEth())
                .donationStartDate(request.getDonationStartDate())
                .donationEndDate(request.getDonationEndDate())
                .build();

        donationService.regist(tempDonation);

        return new MessageResponseDto("기부 항목 작성 완료");

    }


    //해당 도네이션 정보 가져오기
    @GetMapping("/{donationIdx}")
    public ResultDto readDonationByIdx(@PathVariable("donationIdx") String donationIdx){

        Donation tempDonation = donationService.findByIdx(donationIdx);

        return new ResultDto(new ReadDonationResponseDto(tempDonation));
    }

    //전체 도네이션 정보 가져오기
    @GetMapping("/readall")
    public ResultDto readAllDonation() {

        List<ReadDonationResponseDto> donationList = new ArrayList<>();

        donationList = donationService.findAll().stream().map(donation -> new ReadDonationResponseDto(donation)).collect(Collectors.toList());

        return new ResultDto(donationList);

    }

    @PutMapping("/{donationIdx}")
    public MessageResponseDto modifyDonationLevel (@PathVariable("donationIdx") String donationIdx,@RequestBody double donAmount) {

        donationService.addDonationLevel(donationIdx,donAmount);

        return new MessageResponseDto("기부 금액,좋아요 변경 완료");
    }



}
