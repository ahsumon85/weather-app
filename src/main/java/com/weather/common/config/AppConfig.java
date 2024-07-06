package com.weather.common.config;


import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
@Data
public class AppConfig {

    @Value("${application.name}")
    private String APP_NAME;

    @Value("${location.api.base.url}")
    private String LOCATION_API;
    
    @Value("${weather.api.base.url}")
    private String WEATHER_API;

}
