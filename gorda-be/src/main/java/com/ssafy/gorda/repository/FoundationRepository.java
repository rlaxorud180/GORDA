package com.ssafy.gorda.repository;

import com.ssafy.gorda.domain.Company;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

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

    public List<Foundation> findByDonationIdx(String donationIdx) {

        List<Foundation> foundationList = em.createQuery("SELECT f FROM Foundation f WHERE f.donation.donationIdx = :donation_idx",Foundation.class)
                .setParameter("donation_idx",donationIdx).getResultList();

        return foundationList;
    }

    public Foundation findByName(String name){

        List<Foundation> foundations = em.createQuery("SELECT f FROM Foundation f WHERE f.foundationName = :foundation_name",Foundation.class)
                .setParameter("foundation_name",name).getResultList();


        if (foundations.size()==0) return null;

        return foundations.get(0);
    }

    public List<Foundation> findAll() {

        List<Foundation> foundationList = em.createQuery("SELECT f FROM Foundation f",Foundation.class)
                .getResultList();
        return foundationList;
    }

    //기관 삭제

    public String delete (Foundation foundation) {

        em.remove(foundation);
        
        return "Loc : FoundationRepository - 기관 삭제 완료";

    }



}
