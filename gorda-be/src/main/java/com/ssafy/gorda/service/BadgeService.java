package com.ssafy.gorda.service;


import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.repository.BadgeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)

public class BadgeService {

    private final BadgeRepository badgeRepository;

    //등록

    @Transactional
    public String regist(Badge badge) {

        badgeRepository.regist(badge);

        return "Loc : BadgeService - 뱃지 등록완료";

    }

    public List<Badge> findAll() {

        List<Badge> badgeList = badgeRepository.findAll();

        return badgeList;
    }

    //찾기

    public Badge findByIdx(String Idx) {

        return badgeRepository.findByIdx(Idx);

    }


//업데이트
}

