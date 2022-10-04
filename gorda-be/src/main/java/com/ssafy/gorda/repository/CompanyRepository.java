package com.ssafy.gorda.repository;

import com.ssafy.gorda.domain.Company;
import com.ssafy.gorda.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class CompanyRepository {

    private final EntityManager em;

    public String regist (Company company) {

        em.persist(company);
        return "Loc : CompanyRepository - 회사 등록 완료";
    }

    // 회사 찾기

    public Company findByIdx (String Idx) {

        return em.find(Company.class,Idx);
    }

    // 회사 이름으로 찾기
    public Company findByName(String name){

        List<Company> company = em.createQuery("SELECT c FROM Company c WHERE c.companyName = :company_name",Company.class)
                .setParameter("company_name",name).getResultList();


        if (company.size()==0) return null;

        return company.get(0);
    }


    // 전체 회사 찾기

    public List<Company> findAll () {

        List<Company> companyList = em.createQuery("SELECT c FROM Company c",Company.class).getResultList();

        return companyList;
    }

}
