package com.ssafy.gorda.domain;

import com.ssafy.gorda.util.SHA256;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)


public class MyBadge {

    @Column(name = "my_badge_idx")
    @Id
    @Setter(AccessLevel.NONE)
    @NotBlank
    private String myBadgeIdx;

    @JoinColumn(name = "badge_idx")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter (AccessLevel.NONE)
    private Badge badge;

    @JoinColumn(name = "user_idx")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter (AccessLevel.NONE)
    private User user;

    @Column(name = "my_badge_date")
    private LocalDateTime myBadgeDate;

    @Column(name = "is_my_badge_empty")
    private int isMyBadgeEmpty;

    @Column(name = "my_badge_name")
    private String myBadgeName;

    @Column(name = "my_badge_content")
    private String myBadgeContent;

    @Column(name = "my_badge_logo")
    private String myBadgeLogo;

    @Builder
    public MyBadge (Badge badge,
                  User user,
                  LocalDateTime myBadgeDate,
                    String myBadgeContent,
                    String myBadgeName,
                    String myBadgeLogo
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.myBadgeIdx = sha256.encrypt(LocalDateTime.now().toString() + Math.random());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.badge = badge;
        this.user = user;
        this.myBadgeDate = myBadgeDate;
        this.isMyBadgeEmpty = 0;
        this.myBadgeContent = myBadgeContent;
        this.myBadgeName = myBadgeName;
        this.myBadgeLogo = myBadgeLogo;
    }

}
