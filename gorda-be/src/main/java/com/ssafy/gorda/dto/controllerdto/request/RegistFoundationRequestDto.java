package com.ssafy.gorda.dto.controllerdto.request;

import com.ssafy.gorda.domain.Foundation;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RegistFoundationRequestDto {

    private String foundationAccount;
    private String foundationName;
    private String foundationContent;
    private String foundationLogo;
    private String foundationAddress;

}
