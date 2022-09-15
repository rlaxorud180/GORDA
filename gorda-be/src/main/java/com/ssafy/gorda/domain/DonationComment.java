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

public class DonationComment {

    @Column(name = "donation_comment_idx")
    @Id
    @Setter(AccessLevel.NONE)
    @NotBlank
    private String donationCommentIdx;

    @JoinColumn(name = "user_idx")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter(AccessLevel.NONE)
    private User user;

    @JoinColumn(name = "donation_idx")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter(AccessLevel.NONE)
    private Donation donation;

    @Column(name = "donation_comment_content")
    private String donationCommentContent;

    @Column(name = "donation_comment_date")
    private LocalDateTime donationCommentDate;

    @Builder
    public DonationComment (User user,
                            Donation donation,
                            String donationCommentContent,
                            LocalDateTime donationCommentDate
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.donationCommentIdx = sha256.encrypt(LocalDateTime.now().toString());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.user = user;
        this.donation = donation;
        this.donationCommentContent = donationCommentContent;
        this.donationCommentDate = donationCommentDate;

    }

}
