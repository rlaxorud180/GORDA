package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ReadMyDonationResponseDto {

    private String myDonationIdx;
    private User user;
    private Donation donation;
    private String myDonationContent;
    private LocalDateTime myDonationDate;

    public ReadMyDonationResponseDto (MyDonation myDonation) {

        this.myDonationIdx = myDonation.getMyDonationIdx();
        this.user = myDonation.getUser();
        this.donation = myDonation.getDonation();
        this.myDonationContent = myDonation.getMyDonationContent();
        this.myDonationDate = myDonation.getMyDonationDate();

    }

}
