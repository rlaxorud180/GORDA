package com.ssafy.gorda.controller;


import com.ssafy.gorda.domain.Company;
import com.ssafy.gorda.dto.MessageResponseDto;
import com.ssafy.gorda.dto.ResultDto;
import com.ssafy.gorda.dto.controllerdto.request.RegistCompanyRequestDto;
import com.ssafy.gorda.dto.controllerdto.response.ReadCompanyResponseDto;
import com.ssafy.gorda.service.CompanyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/company")
@Slf4j
public class CompanyController {

    private final CompanyService companyService;

    @PostMapping("/regist")
    public MessageResponseDto regist(@RequestBody RegistCompanyRequestDto request) {


        if (companyService.findByName(request.getCompanyName()) != null) {
            return new MessageResponseDto("회사 중복");
        }

        Company tempCompany = Company.builder()
                .companyAccount(request.getCompanyAccount())
                .companyName(request.getCompanyName())
                .build();



        companyService.regist(tempCompany);

        return new MessageResponseDto("회사 등록 완료");

    }

    @GetMapping
    public ResultDto readAllCompany(){
        List<ReadCompanyResponseDto> companyList = new ArrayList<>();

        companyList = companyService.findAll().stream().map(company -> new ReadCompanyResponseDto(company)).collect(Collectors.toList());

        return new ResultDto(companyList);
    }


    @GetMapping("/findByIdx/{CompanyIdx}")
    public ResultDto readCompanyByIdx(@PathVariable("CompanyIdx") String companyIdx){
        Company tempCompany = companyService.findByIdx(companyIdx);

        return new ResultDto(new ReadCompanyResponseDto(tempCompany));
    }


    @GetMapping("/findByName/{CompanyName}")
    public ResultDto readCompanyByName(@PathVariable("CompanyName") String companyName){
        Company tempCompany = companyService.findByName(companyName);

        return new ResultDto(new ReadCompanyResponseDto(tempCompany));
    }


}
