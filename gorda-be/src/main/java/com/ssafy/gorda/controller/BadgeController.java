package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.Company;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistBadgeRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistCompanyRequestDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadBadgeResponseDto;
import com.ssafy.gorda.service.BadgeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/badge")
@Slf4j

public class BadgeController {

    private final BadgeService badgeService;

    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistBadgeRequestDto request) {


        if (badgeService.findByTitle(request.getBadgeTitle()) != null) {
            return new MessageResponseDto("뱃지 중복");
        }

        Badge tempBadge = Badge.builder()
                .badgeContent(request.getBadgeContent())
                .badgeTitle(request.getBadgeTitle())
                .badgeLogo(request.getBadgeLogo())
                .build();



        badgeService.regist(tempBadge);

        return new MessageResponseDto("뱃지 등록 완료");

    }

    //모든 뱃지 정보 불러오기
    @GetMapping
    public ResultDto readAllBadge() {

        List<ReadBadgeResponseDto> badgeList = new ArrayList<>();

        badgeList = badgeService.findAll().stream().map(badge -> new ReadBadgeResponseDto(badge)).collect(Collectors.toList());

        return new ResultDto(badgeList);

    }


}
