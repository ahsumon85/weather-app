package com.weather.dto.weather;

import com.weather.entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class UserFavourites {

    private Long id;

    private User user;

    private String country;

    private String city;

    private Double latitude;

    private Double longitude;
}