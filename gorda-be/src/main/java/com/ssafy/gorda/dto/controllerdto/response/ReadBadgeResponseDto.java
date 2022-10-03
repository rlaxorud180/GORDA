package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.Badge;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadBadgeResponseDto {

    private String badgeIdx;
    private String badgeTitle;
    private String badgeContent;

    public ReadBadgeResponseDto (Badge badge) {
        this.badgeIdx = badge.getBadgeIdx();
        this.badgeTitle = badge.getBadgeTitle();
        this.badgeContent = badge.getBadgeContent();

    }

}
