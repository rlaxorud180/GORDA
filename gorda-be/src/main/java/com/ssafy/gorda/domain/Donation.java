package com.ssafy.gorda.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.gorda.util.SHA256;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class Donation {

    @Column(name = "donation_idx")
    @Id
    @Setter(AccessLevel.NONE)
    @NotBlank
    private String donationIdx;

    @JoinColumn(name = "foundation_idx")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter (AccessLevel.NONE)
    private Foundation foundation;

    @Column(name = "donation_logo")
    private String donationLogo;

    @Column(name = "donation_name")
    private String donationName;

    @Column(name = "donation_subject")
    private String donationSubject;

    @Column(name = "donation_account")
    private String donationAccount;

    @Column(name = "donation_target_eth")
    private double donationTargetEth;

    @Column(name = "donation_current_eth")
    private double donationCurrentEth;

    @Column(name = "donation_like")
    private int donationLike;

    @Column(name = "donation_content")
    private String donationContent;

    @Column(name = "donation_start_date")
    private LocalDateTime donationStartDate;

    @Column(name = "donation_end_date")
    private LocalDateTime donationEndDate;

    @OneToMany(mappedBy = "donation")
    @JsonIgnore
    private List<DonationComment> donationComments = new ArrayList<>();

    @OneToMany(mappedBy = "donation")
    @JsonIgnore
    private List<MyDonation> myDonations = new ArrayList<>();

    @Builder
    public Donation (Foundation foundation,
                     String donationLogo,
                     String donationName,
                     String donationSubject,
                     String donationAccount,
                     String donationContent,
                     int donationLike,
                     double donationCurrentEth,
                     double donationTargetEth,
                     LocalDateTime donationStartDate,
                     LocalDateTime donationEndDate
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.donationIdx = sha256.encrypt(LocalDateTime.now().toString());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.foundation = foundation;
        this.donationLogo = donationLogo;
        this.donationName = donationName;
        this.donationSubject = donationSubject;
        this.donationAccount = donationAccount;
        this.donationContent = donationContent;
        this.donationLike = donationLike;
        this.donationTargetEth = donationTargetEth;
        this.donationCurrentEth = donationCurrentEth;
        this.donationStartDate = donationStartDate;
        this.donationEndDate = donationEndDate;

    }







}
