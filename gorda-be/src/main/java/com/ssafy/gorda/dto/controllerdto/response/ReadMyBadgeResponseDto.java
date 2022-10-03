package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ReadMyBadgeResponseDto {

    private String myBadgeIdx;
    private Badge badge;
    private User user;
    private LocalDateTime myBadgeDate;

    public ReadMyBadgeResponseDto(MyBadge myBadge) {

        this.myBadgeIdx = myBadge.getMyBadgeIdx();
        this.badge = myBadge.getBadge();
        this.user = myBadge.getUser();
        this.myBadgeDate = myBadge.getMyBadgeDate();

    }

}
