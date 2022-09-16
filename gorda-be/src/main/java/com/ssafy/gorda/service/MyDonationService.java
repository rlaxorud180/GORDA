package com.ssafy.gorda.service;


import com.ssafy.gorda.domain.DonationComment;
import com.ssafy.gorda.domain.MyDonation;
import com.ssafy.gorda.repository.MyDonationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)

public class MyDonationService {

    private final MyDonationRepository myDonationRepository;

    //등록

    @Transactional
    public String regist(MyDonation myDonation) {

        myDonationRepository.regist(myDonation);

        return "Loc : MyDonationService - 나의 기부등록완료";

    }

    //찾기

    public MyDonation findByIdx (String Idx) {

        return myDonationRepository.findByIdx(Idx);

    }

}
