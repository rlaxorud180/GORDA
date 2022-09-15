package com.ssafy.gorda.repository;

import com.ssafy.gorda.domain.DonationComment;
import com.ssafy.gorda.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor

public class DonationCommentRepository {

    private final EntityManager em;

    // 댓글 등록


    public String regist (DonationComment donationComment) {

        em.persist(donationComment);
        
        return "Loc : DonationCommentRepository - 댓글 등록 완료";
    }

    // 댓글 찾기

    public DonationComment findByIdx (String Idx) {

        return em.find(DonationComment.class,Idx);
    }

    //댓글 삭제

    public String delete (DonationComment donationComment) {

        em.remove(donationComment);
        
        return "Loc : DonationCommentRepository - 댓글 삭제 완료";
    }



}
