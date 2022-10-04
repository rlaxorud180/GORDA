package com.ssafy.gorda.dto.controllerdto.request;

import com.ssafy.gorda.domain.Foundation;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RegistDonationRequestDto {

    private String foundationIdx;
    private String donationName;
    private String donationLogo;
    private String donationSubject;
    private String donationAccount;
    private String donationContent;
    private int donationLike;
    private double donationTargetEth;
    private double donationCurrentEth;
    private LocalDateTime donationStartDate;
    private LocalDateTime donationEndDate;

}
