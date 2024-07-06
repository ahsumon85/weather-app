package com.weather.services;

import com.vaadin.flow.spring.security.AuthenticationContext;

import com.weather.entity.User;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {
    private final AuthenticationContext authenticationContext;
    private final HttpServletRequest request;

    public SecurityService(AuthenticationContext authenticationContext,
                           HttpServletRequest request) {
        this.request = request;
        this.authenticationContext = authenticationContext;
    }

    public UserDetails getAuthenticatedUser() {
        return authenticationContext.getAuthenticatedUser(UserDetails.class).get();
    }

    public User getCurrentUser() {
        return (User) request.getSession().getAttribute("User");
    }


    public void logout() {
        authenticationContext.logout();
    }
}
