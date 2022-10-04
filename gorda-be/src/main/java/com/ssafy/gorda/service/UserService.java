package com.ssafy.gorda.service;

import com.ssafy.gorda.domain.User;
import com.ssafy.gorda.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)

public class UserService {

    private final UserRepository userRepository;

    //등록

    @Transactional
    public String regist(User user) {
        
        user.setUserNickname(makeNickname());
        
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

    @Transactional
    public void addUserDonationLevel (String Idx, double donAmount) {

        userRepository.addUserDonationLevel(Idx, donAmount);

        return;

    }



    // 닉네임 생성 - 후에 ENUM 타입 추가
    public String makeNickname (){
        String firstName[] = {"멍청한", "섹시한", "똑똑한", "니삭스를 좋아하는", "천사같은", "사랑스러운", "영준같은"};
        String lastName[] = {"도마뱀", "기린", "코끼리", "리트리버", "펭귄", "바퀴벌레", "장구벌레", "사자"};

        Random rnd = new Random();
        StringBuilder sb = new StringBuilder();

        sb.append (firstName[rnd.nextInt(firstName.length)]);
        sb.append(" ");
        sb.append (lastName[rnd.nextInt(lastName.length)]);

        return sb.toString();

    }

}
