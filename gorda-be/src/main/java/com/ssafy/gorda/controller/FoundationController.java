package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistFoundationRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistMyBadgeRequestDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadBadgeResponseDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadFoundationResponseDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadMyBadgeResponseDto;
import com.ssafy.gorda.service.FoundationService;
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
@RequestMapping("/api/foundation")
@Slf4j
public class FoundationController {

    private final FoundationService foundationService;

    // 기관 등록하기
    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistFoundationRequestDto request) {

         Foundation tempFoundation = Foundation.builder()
                 .foundationAccount(request.getFoundationAccount())
                 .foundationName(request.getFoundationName())
                 .foundationContent(request.getFoundationContent())
                 .foundationLogo(request.getFoundationLogo())
                 .foundationAddress(request.getFoundationAddress())
                .build();

        foundationService.regist(tempFoundation);

        return new MessageResponseDto("기관 등록 완료");

    }

    // 기부한 기관 불러오기 기능
    @GetMapping ("/{donationIdx}")
    public ResultDto readFoundationByDonation (@PathVariable ("donationIdx") String donationIdx) {

        List<ReadFoundationResponseDto> foundationList = new ArrayList<>();

        foundationList = foundationService.findByDonationIdx(donationIdx).stream().map(foundation -> new ReadFoundationResponseDto(foundation)).collect(Collectors.toList());

        return new ResultDto(foundationList);

    }

    // 해당 기관 정보 불러오기 기능
    @GetMapping("{FoundationIdx}")
    public ResultDto readFoundationByIdx(@PathVariable("FoundationIdx") String foundationIdx){

        Foundation tempFoundation = foundationService.findByIdx(foundationIdx);

        return new ResultDto(new ReadFoundationResponseDto(tempFoundation));

    }


    @GetMapping
    public ResultDto readAllFoundation() {
        List<ReadFoundationResponseDto> foundationList = new ArrayList<>();

        foundationList = foundationService.findAll().stream().map(foundation -> new ReadFoundationResponseDto(foundation)).collect(Collectors.toList());

        return new ResultDto(foundationList);
    }

}
