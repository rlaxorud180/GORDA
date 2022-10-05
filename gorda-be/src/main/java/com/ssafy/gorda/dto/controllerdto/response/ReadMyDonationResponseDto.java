package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ReadMyDonationResponseDto {

    private String myDonationIdx;
    private String userIdx;
    private String donationIdx;
    private double myDonationAmount;
    private String myDonationName;
    private LocalDateTime myDonationDate;

    public ReadMyDonationResponseDto (MyDonation myDonation) {

        this.myDonationIdx = myDonation.getMyDonationIdx();
        this.userIdx = myDonation.getUser().getUserIdx();
        this.donationIdx = myDonation.getDonation().getDonationIdx();
        this.myDonationAmount = myDonation.getMyDonationAmount();
        this.myDonationName = myDonation.getMyDonationName();
        this.myDonationDate = myDonation.getMyDonationDate();

    }

}
