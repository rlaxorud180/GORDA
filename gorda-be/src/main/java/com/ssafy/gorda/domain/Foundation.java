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

public class Foundation {

    @Column(name = "foundation_idx")
    @Id
    @Setter(AccessLevel.NONE)
    @NotBlank
    private String foundationIdx;

    @Column(name = "foundation_account")
    private String foundationAccount;

    @Column(name = "foundation_name")
    private String foundationName;

    @Column(name = "foundation_address")
    private String foundationAddress;

    @OneToMany(mappedBy = "foundation")
    @JsonIgnore
    private List<Donation> donations = new ArrayList<>();



    @Builder
    public Foundation (String foundationAccount,
                 String foundationName,
                 String foundationAddress
    )
    {

        SHA256 sha256 = new SHA256();

        try {
            this.foundationIdx = sha256.encrypt(LocalDateTime.now().toString());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        this.foundationAccount = foundationAccount;
        this.foundationName = foundationName;
        this.foundationAddress = foundationAddress;

    }

}
