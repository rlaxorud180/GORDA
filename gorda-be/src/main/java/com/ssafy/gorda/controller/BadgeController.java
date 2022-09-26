package com.ssafy.gorda.controller;

import com.ssafy.gorda.service.BadgeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/badge")
@Slf4j

public class BadgeController {

    private final BadgeService badgeService;

    //뱃지 정보 불러오기

}
