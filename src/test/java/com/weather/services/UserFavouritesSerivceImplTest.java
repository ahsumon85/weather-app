
package com.weather.services;

import com.weather.service.UserFavouritesService;
import com.weather.service.UserFavouritesServiceImpl;
import com.weather.repository.UserFavouriteRepository;
import com.weather.dto.detail.LocationInformation;
import com.weather.entity.User;
import com.weather.entity.UserFavourites;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import org.mockito.ArgumentCaptor;

public class UserFavouritesSerivceImplTest {

    @Mock
    private UserFavouriteRepository userFavouritesRepository;

    private UserFavouritesService userFavouritesService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        userFavouritesService = new UserFavouritesServiceImpl(this.userFavouritesRepository);
    }

    @org.junit.jupiter.api.Test
    public void testAddFavourite() {
        LocationInformation locationInformation = new LocationInformation();
        UserFavourites favourite = new UserFavourites();
        User user = new User();
        user.setId(1L);
        favourite.setId(1L);
        favourite.setUser(user);
        favourite.setCity("Dhaka");
        favourite.setCountry("Bangladesh");
        favourite.setLatitude(23.8103);
        favourite.setLongitude(90.4125);

        locationInformation.setName("Dhaka");
        locationInformation.setCountry("Bangladesh");
        locationInformation.setLatitude(23.8103);
        locationInformation.setLongitude(90.4125);

        when(userFavouritesRepository.save(any(UserFavourites.class))).thenReturn(favourite);

        userFavouritesService.addFavourite(user.getId(), locationInformation);

        ArgumentCaptor<UserFavourites> captor = ArgumentCaptor.forClass(UserFavourites.class);
        verify(userFavouritesRepository, times(1)).save(captor.capture());

    }

    @Test
    public void testGetFavourites() {
        User user = new User();
        user.setId(1L);
        UserFavourites favourite1 = new UserFavourites();

        favourite1.setUser(user);
        favourite1.setCity("Dhaka");
        favourite1.setCountry("Bangladesh");
        favourite1.setLatitude(23.8103);
        favourite1.setLongitude(90.4125);

        UserFavourites favourite2 = new UserFavourites();

        favourite2.setUser(user);
        favourite2.setCity("Khulna");
        favourite2.setCountry("Bangladesh");
        favourite2.setLatitude(23.8103);
        favourite2.setLongitude(90.4125);

        List<UserFavourites> favourites = Arrays.asList(favourite1, favourite2);

        when(userFavouritesRepository.findByUser_Id(1L)).thenReturn(favourites);

        List<UserFavourites> returnedFavourites = userFavouritesService.getFavourites(1L);

        assertEquals(favourites, returnedFavourites);
        verify(userFavouritesRepository, times(1)).findByUser_Id(1L);
    }
}

