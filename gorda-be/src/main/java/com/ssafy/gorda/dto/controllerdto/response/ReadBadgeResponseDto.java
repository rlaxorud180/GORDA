package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.Badge;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadBadgeResponseDto {

    private String badgeIdx;
    private String badgeTitle;

    private String badgeLogo;
    private String badgeContent;

    public ReadBadgeResponseDto (Badge badge) {
        this.badgeIdx = badge.getBadgeIdx();
        this.badgeTitle = badge.getBadgeTitle();
        this.badgeLogo = badge.getBadgeLogo();
        this.badgeContent = badge.getBadgeContent();

    }

}
