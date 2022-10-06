package com.ssafy.gorda.service;

import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.repository.BadgeRepository;
import com.ssafy.gorda.repository.MyBadgeRepository;
import com.ssafy.gorda.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)

public class MyBadgeService {

    private final MyBadgeRepository myBadgeRepository;

    private final UserRepository userRepository;


    //등록

    @Transactional
    public String regist(MyBadge myBadge) {

        myBadgeRepository.regist(myBadge);

        return "Loc : MyBadgeService - 내 뱃지 등록완료";

    }

//    @Transactional
//    public String registAll(String userIdx) {
//
//        List<Badge> badgeList = badgeRepository.findAll();
//
//        User tempUser = userRepository.findByIdx(userIdx);
//
//        for(Badge b: badgeList){
//            System.out.println(b.toString());
//            MyBadge tempMyBadge = MyBadge.builder()
//                    .badge(b)
//                    .user(tempUser)
//                    .build();
//
//            myBadgeRepository.regist(tempMyBadge);
//        }
//
//        return "Loc : MybadgeService - 내 뱃지 전체 등록완료";
//    }

    //찾기

    public MyBadge findByIdx(String Idx) {

        return myBadgeRepository.findByIdx(Idx);

    }

    //유저로 찾기

    public List<MyBadge> findByUserIdx(String Idx){

        List<MyBadge> myBadgeList = myBadgeRepository.findByUserIdx(Idx);

        return myBadgeList;

    }

    //기부 1회 확인
    @Transactional
    public void oneTimeDonate (String myBadgeIdx, String userIdx){
        if(userRepository.findByIdx(userIdx).getUserScore() >= 1){
            myBadgeRepository.modifyMyBadge(myBadgeRepository.findByIdx(myBadgeIdx));
        }
    }

    @Transactional
    public void fiveTimeDonate (String myBadgeIdx, String userIdx){
        if(userRepository.findByIdx(userIdx).getUserScore() >= 5){
            myBadgeRepository.modifyMyBadge(myBadgeRepository.findByIdx(myBadgeIdx));
        }
    }

    @Transactional
    public void twentyTimeDonate (String myBadgeIdx, String userIdx){
        if(userRepository.findByIdx(userIdx).getUserScore() >= 20){
            myBadgeRepository.modifyMyBadge(myBadgeRepository.findByIdx(myBadgeIdx));
        }
    }

    @Transactional
    public void oneAmountDonate (String myBadgeIdx, String userIdx){
        double num = Double.parseDouble("10000000000000000");
        if(userRepository.findByIdx(userIdx).getUserAmount() >= num){
            myBadgeRepository.modifyMyBadge(myBadgeRepository.findByIdx(myBadgeIdx));
        }
    }

    @Transactional
    public void tenAmountDonate (String myBadgeIdx, String userIdx){
        double num = Double.parseDouble("100000000000000000");
        if(userRepository.findByIdx(userIdx).getUserAmount() >= num){
            myBadgeRepository.modifyMyBadge(myBadgeRepository.findByIdx(myBadgeIdx));
        }
    }

    @Transactional
    public void hundredAmountDonate (String myBadgeIdx, String userIdx){
        double num = Double.parseDouble("1000000000000000000");
        if(userRepository.findByIdx(userIdx).getUserAmount() >= num){
            myBadgeRepository.modifyMyBadge(myBadgeRepository.findByIdx(myBadgeIdx));
        }
    }
}