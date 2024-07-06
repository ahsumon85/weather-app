/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit4TestClass.java to edit this template
 */
package com.weather.services;

import com.weather.service.UserServiceImpl;
import com.weather.repository.UserRepository;
import com.weather.entity.User;
import jakarta.servlet.http.HttpServletRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;


public class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    private UserServiceImpl userService;

    private HttpServletRequest httpServletRequest;


    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        userService = new UserServiceImpl(this.userRepository, this.httpServletRequest);
    }

    @org.junit.jupiter.api.Test
    public void testGetUser() {
        String userName = "testuser";
        User user = new User();
        user.setUserName(userName);

        when(userRepository.findByUserNameIgnoreCase(userName)).thenReturn(user);

        User foundUser = userService.getUser(userName);

        assertEquals(user.getUserName(), foundUser.getUserName());
        verify(userRepository, times(1)).findByUserNameIgnoreCase(userName);
    }

    @Test
    public void testRegister() {
        String userName = "testuser";
        String password = "password";
        User user = new User();
        user.setUserName(userName);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(password);
        user.setPassword(encodedPassword);

        when(userRepository.save(any(User.class))).thenReturn(user);

        userService.register(userName, password);

        verify(userRepository, times(1)).save(any(User.class));
    }
    
}
