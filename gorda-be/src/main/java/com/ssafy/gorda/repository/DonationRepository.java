package com.ssafy.gorda.repository;

import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.Foundation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor

public class DonationRepository {

    private final EntityManager em;

    // 기부 등록

    public String regist (Donation donation) {

        em.persist(donation);
        return "Loc : DonationRepository - 기부 등록 완료";
    }

    // 기부 찾기

    public Donation findByIdx (String Idx) {

        return em.find(Donation.class,Idx);
    }

    public List<Donation> findAll () {

        List<Donation> donationList = em.createQuery("SELECT * FROM Donation",Donation.class).getResultList();

        return donationList;
    }


    public List<Donation> findByFoundationIdx(String foundationIdx) {

        List<Donation> donations = em.createQuery("SELECT d FROM Donation d WHERE d.foundation.foundationIdx = :foundation_idx",Donation.class)
                .setParameter("foundation_idx",foundationIdx)
                .getResultList();

        return donations;

    }

    //기부 삭제

    public String delete (Donation donation) {

        em.remove(donation);

        return "Loc : DonationRepository - 기부 삭제 완료";

    }
}
