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

    @Column(name = "donation_subject")
    private String donationSubject;

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
                     String donationSubject,
                     String donationContent,
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
        this.donationSubject = donationSubject;
        this.donationContent = donationContent;
        this.donationStartDate = donationStartDate;
        this.donationEndDate = donationEndDate;

    }







}
