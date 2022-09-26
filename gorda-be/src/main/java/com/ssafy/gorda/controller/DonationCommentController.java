package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.DonationComment;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistDonationCommentRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistFoundationRequestDto;
import com.ssafy.gorda.service.BadgeService;
import com.ssafy.gorda.service.DonationCommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/donation_comment")
@Slf4j

public class DonationCommentController {

    private final DonationCommentService donationCommentService;

    // 기부 댓글 등록하기
    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistDonationCommentRequestDto request) {

        DonationComment tempDonationComment = DonationComment.builder()
                .user(request.getUser())
                .donation(request.getDonation())
                .donationCommentContent(request.getDonationCommentContent())
                .donationCommentDate(LocalDateTime.now())
                .build();

        donationCommentService.regist(tempDonationComment);

        return new MessageResponseDto("기부 댓글 등록 완료");

    }
}
