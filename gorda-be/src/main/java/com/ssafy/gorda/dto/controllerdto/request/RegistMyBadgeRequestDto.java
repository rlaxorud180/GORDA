package com.ssafy.gorda.dto.controllerdto.request;

import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.Donation;
import com.ssafy.gorda.domain.User;
import lombok.Data;

@Data
public class RegistMyBadgeRequestDto {

    private String badgeIdx;
    private String userIdx;
    private int isMyBadgeEmpty;

}
