package com.ssafy.gorda.service;

import com.ssafy.gorda.domain.Company;
import com.ssafy.gorda.domain.Foundation;
import com.ssafy.gorda.repository.CompanyRepository;
import com.ssafy.gorda.repository.FoundationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanyService {

    private final CompanyRepository companyRepository;

    //등록
    @Transactional
    public String regist(Company company){

        companyRepository.regist(company);

        return "Loc : CompanyService - 회사 등록완료";

    }

    //찾기
    public Company findByIdx (String Idx) {

        return companyRepository.findByIdx(Idx);

    }

    public List<Company> findAll(){

        List<Company> companies = companyRepository.findAll();

        return companies;
    }

    public Company findByName(String name){

        Company company = companyRepository.findByName(name);

        return company;
    }
}
