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
    @Setter (AccessLevel.NONE) // access 제한하기
    @NotBlank
    private String userIdx;

    @Column(name = "user_account")
    private String userAccount;

    @Column(name = "user_nickname")
    private String userNickname;

    @Column(name = "user_amount")
    private double userAmount;

    @Column(name = "user_score")
    private int userScore;

    @Column(name = "user_role")
    private int userRole;

    @Column(name = "user_vote_count")
    private int userVoteCount;


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
                 String userNickname,
                 int userScore,
                 double userAmount,
                 int userRole,
                 int userVoteCount
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.userIdx = sha256.encrypt(LocalDateTime.now().toString()+userAccount.substring(0, 3));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.userAccount = userAccount;
        this.userNickname = userNickname;
        this.userScore = userScore;
        this.userAmount = userAmount;
        this.userRole = userRole;
        this.userVoteCount = userVoteCount;

    }

}
