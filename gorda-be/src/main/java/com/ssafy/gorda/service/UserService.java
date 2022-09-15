package com.ssafy.gorda.service;

import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)

public class UserService {

    private final UserRepository userRepository;

    //등록

    @Transactional
    public String regist(User user) {
        
        userRepository.regist(user);
        
        return "Loc : UserService - 유저 등록완료";
        
    }
    
    //찾기

    public User findByIdx (String Idx) {

        return userRepository.findByIdx(Idx);

    }

    public User findByAccount (String account) {

        return userRepository.findByAccount(account);

    }

    //업데이트



    // 닉네임 생성 - 후에 ENUM 타입 추가
    public String makeNickname (){

        StringBuilder sb = new StringBuilder();

        sb.append ("접두어 ");
        sb.append ("형용사 ");
        sb.append ("명사");

        return sb.toString();

    }

}
