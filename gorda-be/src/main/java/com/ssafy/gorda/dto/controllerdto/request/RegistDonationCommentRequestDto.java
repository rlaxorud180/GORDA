package com.ssafy.gorda.dto.controllerdto.request;

import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.domain.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RegistDonationCommentRequestDto {

    private User user;
    private Donation donation;
    private String donationCommentContent;

}
