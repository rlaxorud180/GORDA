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

    @Builder
    public MyBadge (Badge badge,
                  User user,
                  LocalDateTime myBadgeDate
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.myBadgeIdx = sha256.encrypt(LocalDateTime.now().toString());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.badge = badge;
        this.user = user;
        this.myBadgeDate = myBadgeDate;

    }

}
