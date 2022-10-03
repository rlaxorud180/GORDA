package com.ssafy.gorda.exception;

public class FileUploadFailedException extends RuntimeException{

    public FileUploadFailedException() {
        super("파일이 없습니다.");
    }


}
