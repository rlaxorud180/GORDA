package com.ssafy.gorda.controller;

import com.ssafy.gorda.service.MyDonationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/my_donation")
@Slf4j

public class MyDonationController {

    private final MyDonationService myDonationService;

}
