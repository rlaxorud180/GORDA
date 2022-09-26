package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.domain.MyDonation;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistMyBadgeRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistMyDonationRequestDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadBadgeResponseDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadMyBadgeResponseDto;
import com.ssafy.gorda.service.BadgeService;
import com.ssafy.gorda.service.MyBadgeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/my_badge")
@Slf4j

public class MyBadgeController {

    private final MyBadgeService myBadgeService;

    // 개인별 획득 뱃지 만들기
    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistMyBadgeRequestDto request) {

        MyBadge tempMyBadge = MyBadge.builder()
                .badge(request.getBadge())
                .user(request.getUser())
                .myBadgeDate(LocalDateTime.now())
                .build();

        myBadgeService.regist(tempMyBadge);

        return new MessageResponseDto("개인별 획득 뱃지 작성 완료");

    }

    //개인별 획득 뱃지 불러오기
    @GetMapping("/{userIdx}")
    public ResultDto readMyBadge(@PathVariable ("userIdx") String userIdx) {

        List<ReadMyBadgeResponseDto> myBadgeList = new ArrayList<>();

        myBadgeList = myBadgeService.findByUserIdx(userIdx).stream().map(myBadge -> new ReadMyBadgeResponseDto(myBadge)).collect(Collectors.toList());

        return new ResultDto(myBadgeList);
    }

}
