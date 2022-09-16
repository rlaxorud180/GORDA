package com.ssafy.gorda.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
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

}
