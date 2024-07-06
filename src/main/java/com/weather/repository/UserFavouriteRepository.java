package com.weather.repository;

import com.weather.entity.UserFavourites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserFavouriteRepository extends JpaRepository<UserFavourites, Long> {

    List<UserFavourites> findByUser_Id(Long userId);

    @Query("select f from UserFavourites f where f.latitude =:latitude and f.longitude =:longitude and f.user.id =:userId")
    UserFavourites get(@Param("latitude") double latitude, @Param("longitude") double longitude, @Param("userId") Long userId);
}
