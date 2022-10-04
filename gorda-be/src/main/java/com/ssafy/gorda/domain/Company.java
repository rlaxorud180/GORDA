package com.ssafy.gorda.domain;

import com.ssafy.gorda.util.SHA256;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class Company {

    @Column(name = "company_idx")
    @Id
    @Setter (AccessLevel.NONE) // access 제한하기
    @NotBlank
    private String companyIdx;

    @Column(name = "company_account")
    private String companyAccount;

    @Column(name = "company_name")
    private String companyName;

    @Builder
    public Company (String companyAccount,
                       String companyName
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.companyIdx = sha256.encrypt(LocalDateTime.now().toString());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.companyAccount = companyAccount;
        this.companyName = companyName;
    }

}
