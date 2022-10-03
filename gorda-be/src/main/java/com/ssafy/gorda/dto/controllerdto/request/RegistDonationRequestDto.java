package com.ssafy.gorda.dto.controllerdto.request;

import com.ssafy.gorda.domain.Foundation;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RegistDonationRequestDto {

    private String foundationIdx;
    private String donationSubject;
    private String donationContent;
    private int donationLike;
    private LocalDateTime donationStartDate;
    private LocalDateTime donationEndDate;

}
