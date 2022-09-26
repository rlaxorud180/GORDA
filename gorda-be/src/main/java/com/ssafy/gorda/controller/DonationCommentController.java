package com.ssafy.gorda.controller;

import com.ssafy.gorda.service.BadgeService;
import com.ssafy.gorda.service.DonationCommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/donation_comment")
@Slf4j

public class DonationCommentController {

    private final DonationCommentService donationCommentService;

}
