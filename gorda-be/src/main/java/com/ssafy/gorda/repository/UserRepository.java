package com.ssafy.gorda.repository;


import com.ssafy.gorda.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor

public class UserRepository {

    private final EntityManager em;

    // 유저 등록

    
    public String regist (User user) {

        em.persist(user);
        return "Loc : UserRepository - 유저 등록 완료";
    }
    
    // 유저 찾기

    public User findByIdx (String Idx) {

        return em.find(User.class,Idx);
    }

    public User findByAccount(String account) {

        List<User> user = em.createQuery("SELECT u FROM User u WHERE u.userAccount = :user_account",User.class)
                .setParameter("user_account",account).getResultList();


        if (user.size()==0) return null;

        return user.get(0);

    }

    // 점수 관련

    public void addUserDonationLevel (String Idx , double donAmount) {

        User tempUser = em.find(User.class, Idx);

        tempUser.setUserScore(tempUser.getUserScore()+1);

        tempUser.setUserAmount(tempUser.getUserAmount()+donAmount);

    }

    public void addUserVoteCount (String Idx) {

        User tempUser = em.find(User.class, Idx);

        tempUser.setUserVoteCount(tempUser.getUserVoteCount()+1);

    }

    //유저 삭제
    
    public String delete (User user) {

        em.remove(user);
        return "Loc : UserRepository - 유저 삭제 완료";
    }



}
