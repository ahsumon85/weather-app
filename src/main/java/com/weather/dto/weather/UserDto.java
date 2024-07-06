package com.weather.dto.weather;

import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class UserDto {
    private Long id;
    private String userName;
    private String password;
}
