package com.ssafy.gorda.controller;

import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistFoundationRequestDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistMyBadgeRequestDto;
import com.ssafy.gorda.service.FoundationService;
import com.ssafy.gorda.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/foundation")
@Slf4j
public class FoundationController {

    private final FoundationService foundationService;

    // 기관 등록하기
    public MessageResponseDto regist(RegistFoundationRequestDto request) {

         Foundation tempFoundation = Foundation.builder()
                 .foundationAccount(request.getFoundationAccount())
                 .foundationName(request.getFoundationName())
                 .foundationAddress(request.getFoundationAddress())
                .build();

        foundationService.regist(tempFoundation);

        return new MessageResponseDto("기관 등록 완료");

    }



}
