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
import com.ssafy.gorda.service.UserService;
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
    private final BadgeService badgeService;
    private final UserService userService;


    // 개인별 획득 뱃지 만들기
    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistMyBadgeRequestDto request) {

        MyBadge tempMyBadge = MyBadge.builder()
                .badge(badgeService.findByIdx(request.getBadgeIdx()))
                .user(userService.findByIdx(request.getUserIdx()))
                .myBadgeDate(LocalDateTime.now())
                .build();

        myBadgeService.regist(tempMyBadge);

        return new MessageResponseDto("개인별 획득 뱃지 작성 완료");

    }

    //개인별 획득 뱃지 불러오기
    @GetMapping("/user/{userIdx}")
    public ResultDto readMyBadge(@PathVariable ("userIdx") String userIdx) {

        List<ReadMyBadgeResponseDto> myBadgeList = new ArrayList<>();

        myBadgeList = myBadgeService.findByUserIdx(userIdx).stream().map(myBadge -> new ReadMyBadgeResponseDto(myBadge)).collect(Collectors.toList());

        return new ResultDto(myBadgeList);
    }

    @PutMapping("/user/{userIdx}")
    public MessageResponseDto assembleMyBadge(@PathVariable("userIdx") String userIdx){

        List<ReadMyBadgeResponseDto> myBadgeList = new ArrayList<>();

        myBadgeList = myBadgeService.findByUserIdx(userIdx).stream().map(myBadge -> new ReadMyBadgeResponseDto(myBadge)).collect(Collectors.toList());

        for(ReadMyBadgeResponseDto myBadge : myBadgeList) {
            if(myBadge.getIsMyBadgeEmpty() == 1) continue;

            if(badgeService.findByIdx(myBadge.getBadgeIdx()).getBadgeTitle().equals("기부 새내기")) {
                myBadgeService.oneTimeDonate(myBadge.getMyBadgeIdx(), userIdx);
            }
            else if (badgeService.findByIdx(myBadge.getBadgeIdx()).getBadgeTitle().equals("기부의 달인")) {
                myBadgeService.fiveTimeDonate(myBadge.getMyBadgeIdx(), userIdx);
            }
            else if (badgeService.findByIdx(myBadge.getBadgeIdx()).getBadgeTitle().equals("기부 통달자")) {
                myBadgeService.twentyTimeDonate(myBadge.getMyBadgeIdx(), userIdx);
            }
            else if (badgeService.findByIdx(myBadge.getBadgeIdx()).getBadgeTitle().equals("티끌모아 태산")) {
                myBadgeService.oneAmountDonate(myBadge.getMyBadgeIdx(), userIdx);
            }
            else if (badgeService.findByIdx(myBadge.getBadgeIdx()).getBadgeTitle().equals("태산모아 산맥")) {
                myBadgeService.tenAmountDonate(myBadge.getMyBadgeIdx(), userIdx);
            }
            else if (badgeService.findByIdx(myBadge.getBadgeIdx()).getBadgeTitle().equals("노블레스 오블리주")) {
                myBadgeService.hundredAmountDonate(myBadge.getMyBadgeIdx(), userIdx);
            }
        }

        return new MessageResponseDto("내 뱃지 갱신 완료");
    }

    //개인별 뱃지 획득 여부 갱신
//    @PutMapping("/user/{userIdx}")
//    public MessageResponseDto assembleMyBadge (@PathVariable ("userIdx") String userIdx){
//
//        User tempUser = userService.findByIdx(userIdx);
//
//        myBadgeService.getScoreBadge(tempUser);
//        myBadgeService.getAmountBadge(tempUser);
//
//        return new MessageResponseDto("뱃지 획득 갱신");
//
//    }

}
