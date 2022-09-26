package com.ssafy.gorda.controller;

import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadBadgeResponseDto;
import com.ssafy.gorda.service.BadgeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/badge")
@Slf4j

public class BadgeController {

    private final BadgeService badgeService;

    //모든 뱃지 정보 불러오기
    @GetMapping
    public ResultDto readAllBadge() {

        List<ReadBadgeResponseDto> badgeList = new ArrayList<>();

        badgeList = badgeService.findAll().stream().map(badge -> new ReadBadgeResponseDto(badge)).collect(Collectors.toList());

        return new ResultDto(badgeList);

    }


}
