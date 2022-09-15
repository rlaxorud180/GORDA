package com.ssafy.gorda.repository;

import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor

public class FoundationRepository {

    private final EntityManager em;

    // 기관 등록


    public String regist (Foundation foundation) {

        em.persist(foundation);
        return "Loc : FoundationRepository - 기관 등록 완료";
    }

    // 기관 찾기

    public Foundation findByIdx (String Idx) {

        return em.find(Foundation.class,Idx);
    }

    //기관 삭제

    public String delete (Foundation foundation) {

        em.remove(foundation);
        
        return "Loc : FoundationRepository - 기관 삭제 완료";

    }



}
