package com.ssafy.gorda.repository;

import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.MyBadge;
import com.ssafy.gorda.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor

public class MyBadgeRepository {

    private final EntityManager em;

    public String regist(MyBadge myBadge) {

        em.persist(myBadge);
        return "Loc : MyBadgeRepository - 뱃지 등록 완료";
    }

    // 나의 뱃지 찾기

    public MyBadge findByIdx(String Idx) {

        return em.find(MyBadge.class, Idx);
    }

    public MyBadge findByUserIdx(String userIdx) {

        List<MyBadge> myBadges = em.createQuery("SELECT m FROM MyBadge m WHERE m.userIdx = :user_idx",MyBadge.class)
                .setParameter("user_idx",userIdx).getResultList();

        if (myBadges.size()==0) return null;

        return myBadges.get(0);

    }


    //뱃지 삭제

    public String delete(MyBadge myBadge) {

        em.remove(myBadge);
        return "Loc : BadgeRepository - 나의 뱃지 삭제 완료";
    }
}
