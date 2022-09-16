package com.ssafy.gorda.service;


import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.DonationComment;
import com.ssafy.gorda.repository.DonationCommentRepository;
import com.ssafy.gorda.repository.DonationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

}
