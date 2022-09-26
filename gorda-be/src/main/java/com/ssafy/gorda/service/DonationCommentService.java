package com.ssafy.gorda.service;


import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.DonationComment;
import com.ssafy.gorda.domain.MyDonation;
import com.ssafy.gorda.repository.DonationCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)

public class DonationCommentService {

    private final DonationCommentRepository donationCommentRepository;

    //등록

    @Transactional
    public String regist(DonationComment donationComment) {

        donationCommentRepository.regist(donationComment);

        return "Loc : DonationCommentService - 댓글 등록완료";

    }

    //찾기

    public DonationComment findByIdx (String Idx) {

        return donationCommentRepository.findByIdx(Idx);

    }

    public List<DonationComment> findByUserIdx (String userIdx){

        List<DonationComment> donationCommentList = donationCommentRepository.findByUserIdx(userIdx);

        return donationCommentList;
    }

    //삭제
    @Transactional
    public void delete(DonationComment donationComment) {

        donationCommentRepository.delete(donationComment);
    }

}
