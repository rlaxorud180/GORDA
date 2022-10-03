package com.ssafy.gorda.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.gorda.util.SHA256;
import lombok.*;

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

public class Badge {

    @Column(name = "badge_idx")
    @Id
    @Setter (AccessLevel.NONE)
    @NotBlank
    private String badgeIdx;

    @Column(name = "badge_title")
    private String badgeTitle;

    @Column(name = "badge_logo")
    private String badgeLogo;

    @Column(name = "badge_content")
    private String badgeContent;

    @OneToMany(mappedBy = "badge")
    @JsonIgnore
    private List<MyBadge> myBadges = new ArrayList<>();

    @Builder
    public Badge (String badgeTitle,
                  String badgeLogo,
                  String badgeContent
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.badgeIdx = sha256.encrypt(LocalDateTime.now().toString());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.badgeTitle = badgeTitle;
        this.badgeLogo = badgeLogo;
        this.badgeContent = badgeContent;

    }

}
