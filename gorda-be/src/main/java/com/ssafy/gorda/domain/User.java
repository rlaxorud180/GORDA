package com.ssafy.gorda.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.gorda.util.SHA256;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class User {

    @Column(name = "user_idx")
    @Id
    @Setter (AccessLevel.NONE) // access 제한
    @NotBlank
    private String userIdx;

    @Column(name = "user_account")
    private String userAccount;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_nickname")
    private String userNickname;

    @Column(name = "user_score")
    private String userScore;

    @Column(name = "user_address")
    private String userAddress;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<DonationComment> donationComments = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<MyDonation> myDonations = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<MyBadge> myBadges = new ArrayList<>();


    @Builder
    public User (String userAccount,
                 String userEmail,
                 String userNickname,
                 String userScore,
                 String userAddress
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.userIdx = sha256.encrypt(LocalDateTime.now().toString());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.userAccount = userAccount;
        this.userEmail = userEmail;
        this.userNickname = userNickname;
        this.userScore = userScore;
        this.userAddress = userAddress;

    }

}