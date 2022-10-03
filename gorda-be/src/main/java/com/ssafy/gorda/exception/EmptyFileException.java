package com.ssafy.gorda.exception;

public class EmptyFileException extends RuntimeException {

    public EmptyFileException() {
        super("파일이 없습니다.");
    }

}
