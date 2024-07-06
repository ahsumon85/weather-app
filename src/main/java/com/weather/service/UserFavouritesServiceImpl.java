package com.weather.service;

import com.weather.repository.UserFavouriteRepository;
import com.weather.entity.User;
import com.weather.entity.UserFavourites;
import com.weather.dto.detail.LocationInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserFavouritesServiceImpl implements UserFavouritesService {

    UserFavouriteRepository userFavouriteRepository;

    public UserFavouritesServiceImpl(UserFavouriteRepository userFavouriteRepository) {
        this.userFavouriteRepository = userFavouriteRepository;
    }

    @Override
    public void addFavourite(Long userId, LocationInformation locationInformation) {
        if (userId == 0 || locationInformation == null) {
            return;
        }
        UserFavourites userFavourites = new UserFavourites();
        User user = new User();
        user.setId(userId);

        userFavourites.setLatitude(locationInformation.getLatitude());
        userFavourites.setLongitude(locationInformation.getLongitude());
        userFavourites.setCity(locationInformation.getName());
        userFavourites.setCountry(locationInformation.getCountry());
        userFavourites.setUser(user);
        userFavouriteRepository.save(userFavourites);
    }


    @Override
    public void removeFavourite(LocationInformation locationInformation, Long userId) {
        if (userId == 0 || locationInformation == null) {
            return;
        }
        UserFavourites userFavourites = userFavouriteRepository.get(locationInformation.getLatitude(), locationInformation.getLongitude(), userId);
        if (userFavourites != null) {
            userFavouriteRepository.delete(userFavourites);
        }
    }

    @Override
    public List<UserFavourites> getFavourites(Long userId) {
        List<UserFavourites> favourites = userFavouriteRepository.findByUser_Id(userId);
        System.out.println(favourites.stream().toList());
        return favourites;
    }
}
