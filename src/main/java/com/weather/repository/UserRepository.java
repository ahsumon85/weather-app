package com.weather.repository;

import com.weather.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUserNameIgnoreCase(String userName);
}
