package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.DonationComment;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistDonationCommentRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistFoundationRequestDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadDonationCommentResponseDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadFoundationResponseDto;
import com.ssafy.gorda.service.BadgeService;
import com.ssafy.gorda.service.DonationCommentService;
import com.ssafy.gorda.service.DonationService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/donation_comment")
@Slf4j
@Api(value = "DonationCommentController", description = ("기부에 달리는 댓글 목록 컨트롤러"))

public class DonationCommentController {

    private final DonationCommentService donationCommentService;
    private final DonationService donationService;

    // 기부 댓글 등록하기
    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistDonationCommentRequestDto request) {

        DonationComment tempDonationComment = DonationComment.builder()
                .user(request.getUser())
                .donation(donationService.findByIdx(request.getDonationIdx()))
                .donationCommentContent(request.getDonationCommentContent())
                .donationCommentDate(LocalDateTime.now())
                .build();

        donationCommentService.regist(tempDonationComment);

        return new MessageResponseDto("기부 댓글 등록 완료");

    }

    //나의 모든 댓글 가져오기 기능

    @GetMapping("/userIdx")
    public ResultDto readDonationCommentByUser (@PathVariable ("userIdx") String userIdx) {

        List<ReadDonationCommentResponseDto> donationCommentList = new ArrayList<>();

        donationCommentList = donationCommentService.findByUserIdx(userIdx).stream().map(donationComment -> new ReadDonationCommentResponseDto(donationComment)).collect(Collectors.toList());

        return new ResultDto(donationCommentList);

    }

    //지정된 나의 댓글 삭제

    @DeleteMapping("{DonationCommentIdx}")
    @ApiOperation(value="댓글을 삭제", notes = "Idx에 해당하는 댓글 제거 / id는 pathVariable로 request")
    public MessageResponseDto deleteDiary(@PathVariable("DonationCommentIdx") String DonationCommentIdx) {

        DonationComment donationComment = donationCommentService.findByIdx(DonationCommentIdx);

        donationCommentService.delete(donationComment);

        return new MessageResponseDto("댓글 삭제 완료");

    }
}
