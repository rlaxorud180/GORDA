package com.ssafy.gorda.service;


import com.ssafy.gorda.domain.Company;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.repository.FoundationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)

public class FoundationService {

    private final FoundationRepository foundationRepository;

    //등록

    @Transactional
    public String regist(Foundation foundation) {

        foundationRepository.regist(foundation);

        return "Loc : FoundationService - 기관 등록완료";

    }

    //찾기

    public Foundation findByIdx (String Idx) {

        return foundationRepository.findByIdx(Idx);

    }

    public List<Foundation> findByDonationIdx(String DonationIdx){

        List<Foundation> foundationList = foundationRepository.findByDonationIdx(DonationIdx);

        return foundationList;

    }

    public Foundation findByName(String name){

        Foundation foundation = foundationRepository.findByName(name);

        return foundation;
    }

    public List<Foundation> findAll(){

        List<Foundation> foundationList = foundationRepository.findAll();

        return foundationList;

    }


}
