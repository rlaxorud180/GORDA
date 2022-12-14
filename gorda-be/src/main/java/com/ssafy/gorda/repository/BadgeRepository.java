package com.ssafy.gorda.repository;

import com.ssafy.gorda.domain.Badge;
import com.ssafy.gorda.domain.Company;
import com.ssafy.gorda.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor

public class BadgeRepository {

    private final EntityManager em;

    public String regist (Badge badge) {

        em.persist(badge);
        return "Loc : BadgeRepository - 뱃지 등록 완료";
    }

    // 뱃지 찾기

    public Badge findByIdx (String Idx) {

        return em.find(Badge.class,Idx);
    }

    public Badge findByTitle(String title){

        List<Badge> badges = em.createQuery("SELECT b FROM Badge b WHERE b.badgeTitle = :badge_title",Badge.class)
                .setParameter("badge_title",title).getResultList();


        if (badges.size()==0) return null;

        return badges.get(0);
    }

    // 전체 뱃지 찾기

    public List<Badge> findAll () {

        List<Badge> badgeList = em.createQuery("SELECT b FROM Badge b",Badge.class).getResultList();

        return badgeList;
    }

    //뱃지 삭제

    public String delete (Badge badge) {

        em.remove(badge);
        return "Loc : BadgeRepository - 뱃지 삭제 완료";
    }

}
