package com.ssafy.gorda.controller;

import com.ssafy.gorda.service.AwsS3Service;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/file")
@Slf4j
@Api(value = "FileController", description = ("파일 컨트롤러"))
public class FileController {
    private final AwsS3Service awsS3Service;


    @PostMapping("/upload")
    @ApiOperation(value="파일 서버에 올리기", notes = "(parameter는 catgory와 파일 (body)) 서버에 올리는 작업이므로 서버 키가 있어야 함(백엔드 문의) + 돈 나올 수 있는 기능이니 조금만..주의")
    public String uploadFile(
            @RequestParam("category") String category,
            @RequestPart(value = "file") MultipartFile multipartFile) {
        return awsS3Service.uploadFileV1(category, multipartFile);
    }


}
