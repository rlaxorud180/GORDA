package com.ssafy.gorda.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
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

    @Column(name = "badge_content")
    private String badgeContent;

    @OneToMany(mappedBy = "badge")
    @JsonIgnore
    private List<MyBadge> myBadges = new ArrayList<>();

}
