package com.ssafy.gorda.controller;

import com.ssafy.gorda.service.FoundationService;
import com.ssafy.gorda.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/foundation")
@Slf4j
public class FoundationController {

    private final FoundationService foundationService;



}
