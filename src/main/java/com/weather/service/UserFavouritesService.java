package com.weather.service;

import com.weather.entity.UserFavourites;
import com.weather.dto.detail.LocationInformation;

import java.util.List;

public interface UserFavouritesService {
    void addFavourite(Long userId, LocationInformation locationInformation);

    void removeFavourite(LocationInformation locationInformation, Long userId);

    List<UserFavourites> getFavourites(Long userId);
}
