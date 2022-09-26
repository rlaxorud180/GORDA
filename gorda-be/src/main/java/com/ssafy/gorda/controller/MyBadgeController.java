package com.ssafy.gorda.controller;

import com.ssafy.gorda.service.BadgeService;
import com.ssafy.gorda.service.MyBadgeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/my_badge")
@Slf4j

public class MyBadgeController {

    private final MyBadgeService myBadgeService;

}
