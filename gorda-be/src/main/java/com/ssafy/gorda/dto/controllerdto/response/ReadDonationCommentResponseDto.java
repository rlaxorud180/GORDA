package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.DonationComment;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ReadDonationCommentResponseDto {

    private String donationCommentIdx;
    private User user;
    private Donation donation;
    private String donationCommentContent;
    private LocalDateTime donationCommentDate;

    public ReadDonationCommentResponseDto(DonationComment donationComment) {

        this.donationCommentIdx = donationComment.getDonationCommentIdx();
        this.user = donationComment.getUser();
        this.donation = donationComment.getDonation();
        this.donationCommentContent = donationComment.getDonationCommentContent();
        this.donationCommentDate = donationComment.getDonationCommentDate();

    }

}
