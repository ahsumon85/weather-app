package com.weather.common.config;

import lombok.Data;
import org.springframework.context.annotation.Configuration;

@Configuration
@Data
public class ApplicationRoutes {
    public static final String HOME = "/";
    public static final String LOGIN_ROUTE = "/login";
    public static final String SIGNUP_ROUTE = "/signup";

}
