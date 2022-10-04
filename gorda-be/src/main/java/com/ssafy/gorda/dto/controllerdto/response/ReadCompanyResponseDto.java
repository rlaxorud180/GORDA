package com.ssafy.gorda.dto.controllerdto.response;

import com.ssafy.gorda.domain.Company;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadCompanyResponseDto {

    private String companyIdx;
    private String companyAccount;
    private String companyName;

    public ReadCompanyResponseDto(Company company){

        this.companyIdx = company.getCompanyIdx();
        this.companyAccount = company.getCompanyAccount();
        this.companyName = company.getCompanyName();
    }
}
