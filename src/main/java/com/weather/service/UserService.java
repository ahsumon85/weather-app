package com.weather.service;

import com.weather.entity.User;


public interface UserService {

   User getUser(String userName);

   void register(String userName, String password);
}
