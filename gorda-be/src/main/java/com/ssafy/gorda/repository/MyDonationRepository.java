package com.ssafy.gorda.repository;

import com.ssafy.gorda.domain.MyDonation;
import com.ssafy.gorda.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor

public class MyDonationRepository {

    private final EntityManager em;

    // 나의 기부 등록


    public String regist (MyDonation myDonation) {

        em.persist(myDonation);

        return "Loc : MyDonationRepository - 나의 기부 등록 완료";
    }

    // 나의 기부 찾기

    public MyDonation findByIdx (String Idx) {

        return em.find(MyDonation.class,Idx);
    }

    // 나의 기부 삭제

    public String delete (MyDonation myDonation) {

        em.remove(myDonation);

        return "Loc : MyDonationRepository - 나의 기부 삭제 완료";
    }



}