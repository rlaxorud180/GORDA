package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.DonationComment;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ReadDonationCommentResponseDto {

    private String donationCommentIdx;
    private String userIdx;
    private String donationIdx;
    private String donationCommentContent;
    private LocalDateTime donationCommentDate;

    public ReadDonationCommentResponseDto(DonationComment donationComment) {

        this.donationCommentIdx = donationComment.getDonationCommentIdx();
        this.userIdx = donationComment.getUser().getUserIdx();
        this.donationIdx = donationComment.getDonation().getDonationIdx();
        this.donationCommentContent = donationComment.getDonationCommentContent();
        this.donationCommentDate = donationComment.getDonationCommentDate();

    }

}
