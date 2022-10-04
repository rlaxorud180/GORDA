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
public class ReadDonationResponseDto {

    private String donationIdx;
    private Foundation foundation;
    private String donationName;
    private String donationSubject;
    private String donationContent;
    private int donationLike;
    private double donationTargetEth;
    private double donationCurrentEth;
    private LocalDateTime donationStartDate;
    private LocalDateTime donationEndDate;

    public ReadDonationResponseDto(Donation donation) {

        this.donationIdx = donation.getDonationIdx();
        this.foundation = donation.getFoundation();
        this.donationName = donation.getDonationName();
        this.donationSubject = donation.getDonationSubject();
        this.donationContent = donation.getDonationContent();
        this.donationLike = donation.getDonationLike();
        this.donationTargetEth = donation.getDonationTargetEth();
        this.donationCurrentEth = donation.getDonationCurrentEth();
        this.donationStartDate = donation.getDonationStartDate();
        this.donationEndDate = donation.getDonationEndDate();

    }

}
