package com.ssafy.gorda.domain;

import com.ssafy.gorda.util.SHA256;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class MyDonation {

    @Column(name = "my_donation_idx")
    @Id
    @Setter(AccessLevel.NONE)
    @NotBlank
    private String myDonationIdx;

    @JoinColumn(name = "user_idx")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter(AccessLevel.NONE)
    private User user;

    @JoinColumn(name = "donation_idx")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter(AccessLevel.NONE)
    private Donation donation;

    @Column(name = "my_donation_content")
    private double myDonationAmount;

    @Column(name = "my_donation_name")
    private String myDonationName;

    @Column(name = "my_donation_date")
    private LocalDateTime myDonationDate;

    @Builder
    public MyDonation (
                     User user,
                     Donation donation,
                     double myDonationAmount,
                     String myDonationName,
                     LocalDateTime myDonationDate
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.myDonationIdx = sha256.encrypt(LocalDateTime.now().toString());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.user = user;
        this.donation = donation;
        this.myDonationAmount = myDonationAmount;
        this.myDonationName = myDonationName;
        this.myDonationDate = myDonationDate;

    }

}
