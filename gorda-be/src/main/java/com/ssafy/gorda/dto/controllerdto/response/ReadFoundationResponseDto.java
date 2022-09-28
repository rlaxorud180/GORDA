package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.Foundation;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadFoundationResponseDto {

    private String foundationIdx;
    private String foundationAccount;
    private String foundationName;
    private String foundationAddress;

    public ReadFoundationResponseDto(Foundation foundation) {

        this.foundationIdx = foundation.getFoundationIdx();
        this.foundationAccount = foundation.getFoundationAccount();
        this.foundationName = foundation.getFoundationName();
        this.foundationAddress = foundation.getFoundationAddress();

    }

}
