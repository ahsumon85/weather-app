package com.weather.views.dashboard;

import com.vaadin.flow.component.UI;
import com.weather.common.network.LocationApiConsume;
import com.weather.common.network.WeatherApiConsume;
import com.weather.service.UserFavouritesService;
import com.weather.entity.User;
import com.weather.entity.UserFavourites;
import com.weather.dto.detail.LocationInformation;
import com.weather.services.SecurityService;

import com.weather.views.MainLayout;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.combobox.ComboBox;

import com.vaadin.flow.component.html.NativeLabel;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.spring.annotation.SpringComponent;
import jakarta.annotation.security.PermitAll;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Scope;
import com.weather.dto.pagination.PaginatedGrid;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.weather.common.config.ApplicationRoutes.HOME;
import static com.weather.common.config.ApplicationRoutes.LOGIN_ROUTE;

@SpringComponent
@Scope("prototype")
@PermitAll
@Route(value = HOME, layout = MainLayout.class)
@PageTitle("Weather App")

public class WeatherView extends VerticalLayout {
    private final HttpServletRequest httpServletRequest;
    private final UserFavouritesService userFavouritesService;
    private List<UserFavourites> favouriteLists = new ArrayList<>();
    private final PaginatedGrid<LocationInformation, LocationInformation> locationTableGrid = new PaginatedGrid<>();
    private final TextField filterText = new TextField();
    private final ComboBox<UserFavourites> favouriteListDropDown = new ComboBox<>("My Favourites (Country-City)");
    private final WeatherDetails weatherDetails;

    private final LocationApiConsume locationApiConsume;
    private final WeatherDailyDetails weatherDailyDetails;

    public WeatherView(HttpServletRequest httpServletRequest,
                       UserFavouritesService userFavouritesService,
                       SecurityService securityService,
                       LocationApiConsume locationApiConsume,
                       WeatherHourlyDetailsChart hourlyTemperatureChart,
                       WeatherHourlyDetails weatherHourlyDetails,
                       WeatherDailyDetails weatherDailyDetails) {

        this.userFavouritesService = userFavouritesService;
        this.httpServletRequest = httpServletRequest;
        this.locationApiConsume = locationApiConsume;
        this.weatherDailyDetails = weatherDailyDetails;
        this.weatherDetails = new WeatherDetails(hourlyTemperatureChart, weatherHourlyDetails, weatherDailyDetails);

        addClassName("list-view");
        setSizeFull();
        configureLocationTable();
        add(this.getToolbarConfig(), new NativeLabel("Locations by city name "), this.getWeatherLayout());

        if (this.getCurrentUser() == null) {
            securityService.logout();
            UI currentUI = UI.getCurrent();
            if (currentUI != null) {
                currentUI.navigate(LOGIN_ROUTE);
            }
        }
    }

    private Component getWeatherLayout() {
        VerticalLayout content = new VerticalLayout(this.locationTableGrid, this.weatherDetails);
        content.addClassName("content");
        content.setSizeFull();
        return content;
    }


    private HorizontalLayout getToolbarConfig() {
        filterText.setPlaceholder("City search...");
        filterText.setClearButtonVisible(true);
        filterText.setValueChangeMode(ValueChangeMode.LAZY);
        filterText.addValueChangeListener(e -> updateLocationList());
        this.loadFavouriteList();

        var toolbar = new HorizontalLayout(filterText, favouriteListDropDown);
        toolbar.setAlignItems(Alignment.BASELINE);
        toolbar.addClassName("toolbar");

        toolbar.setFlexGrow(1, filterText);
        toolbar.setFlexGrow(2, favouriteListDropDown);
        toolbar.setWidthFull();
        return toolbar;
    }

    private void updateLocationList() {
        List<LocationInformation> locationInformationList = this.locationApiConsume.fetchLocationResponse(filterText.getValue());

        if (locationInformationList == null || locationInformationList.isEmpty()) {
            locationTableGrid.setItems(Collections.emptyList());
            return;
        }

        locationInformationList.forEach(locationInformation -> {
            if (this.getCurrentUser() == null) {
                return;
            }
            locationInformation.setFavorite(favouriteLists.parallelStream().anyMatch(favourite ->
                    favourite.getLatitude() == locationInformation.getLatitude() && favourite.getLongitude() == locationInformation.getLongitude()
            ));
        });

        locationTableGrid.setItems(locationInformationList);
        locationTableGrid.setPageSize(10);
    }


    private void configureLocationTable() {
        locationTableGrid.addClassNames("contact-grid");
        locationTableGrid.addColumn(LocationInformation::getCountry).setHeader("Country").setSortable(true);
        locationTableGrid.addColumn(LocationInformation::getName).setHeader("City Name").setSortable(true);
        locationTableGrid.addColumn(LocationInformation::getLatitude).setHeader("Latitude").setSortable(true);
        locationTableGrid.addColumn(LocationInformation::getLongitude).setHeader("Longitude").setSortable(true);

        locationTableGrid.addComponentColumn(locationInformation -> {
            Checkbox checkbox = new Checkbox();
            checkbox.setValue(locationInformation.isFavorite());
            checkbox.addValueChangeListener(event -> {
                favouriteOnChange(locationInformation, event.getValue());
            });
            return checkbox;
        }).setHeader("Favorite").setKey("isFavorite");
        locationTableGrid.getColumns().forEach(col -> col.setAutoWidth(true));
        locationTableGrid.setPageSize(10);

        locationTableGrid.asSingleSelect().addValueChangeListener(event -> showDetailsWeather(event.getValue()));

    }


    private void showDetailsWeather(LocationInformation locationInformation) {
        if (locationInformation == null) {
            closeWeatherView();
        } else {
            this.weatherDailyDetails.setDailyDetails(locationInformation);
            weatherDetails.setVisible(true);
            addClassName("editing");
        }
    }

    private void closeWeatherView() {
        weatherDailyDetails.setDailyDetails(null);
        weatherDetails.setVisible(false);
        removeClassName("editing");
    }


    private void favouriteOnChange(LocationInformation locationInformation, Boolean isFavourite) {
        User user = getCurrentUser();
        if (user == null) {
            UI.getCurrent().navigate(LOGIN_ROUTE);
            return;
        }
        this.modifyFavourite(user, locationInformation, isFavourite);
        this.loadFavouriteList();
    }

    private User getCurrentUser() {
        return (User) httpServletRequest.getSession().getAttribute("User");
    }

    private void modifyFavourite(User user, LocationInformation locationInformation, Boolean isFavourite) {
        if (isFavourite) {
            this.userFavouritesService.addFavourite(user.getId(), locationInformation);
        } else {
            this.userFavouritesService.removeFavourite(locationInformation, user.getId());
        }
    }

    private void loadFavouriteList() {
        if (this.getCurrentUser() == null) {
            UI.getCurrent().navigate(LOGIN_ROUTE);
            return;
        }
        this.favouriteLists = this.userFavouritesService.getFavourites(this.getCurrentUser().getId());

        this.favouriteListDropDown.setItems(this.favouriteLists);
        this.favouriteListDropDown.setItemLabelGenerator(UserFavourites::getCountryCity);
        this.favouriteListDropDown.addValueChangeListener(e -> {
            filterText.setValue(e.getValue().getCity());
            if(filterText.getValue() != null ){
                updateLocationList();
            }

        });
    }
}
