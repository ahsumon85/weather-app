package com.weather.views.dashboard;

import com.vaadin.flow.component.grid.Grid;
import com.weather.common.network.WeatherApiConsume;
import com.weather.dto.detail.DailyUnitsDetail;
import com.weather.dto.detail.HourlyUnitsDetail;
import com.weather.dto.detail.LocationInformation;
import com.weather.dto.detail.WeatherData;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
public class WeatherDailyDetails {

    final Grid<DailyUnitsDetail> gridDaily = new Grid<>(DailyUnitsDetail.class);
    private final WeatherApiConsume weatherApiConsume;
    private final WeatherHourlyDetails weatherHourlyDetails;

    public WeatherDailyDetails(WeatherApiConsume weatherApiConsume,
                               WeatherHourlyDetails weatherHourlyDetails) {
        this.weatherApiConsume = weatherApiConsume;
        this.weatherHourlyDetails = weatherHourlyDetails;
    }

    void setDailyDetails(LocationInformation locationInformation) {
        if (locationInformation == null) return;
        WeatherData weatherData = this.weatherApiConsume.fetchWeatherResponse(locationInformation);
        List<DailyUnitsDetail> dailyDetails = this.getDailyDetails(weatherData, locationInformation);
        this.gridDaily.setItems(dailyDetails);
    }

    public List<DailyUnitsDetail> getDailyDetails(WeatherData weatherData, LocationInformation locationInformation) {
        List<DailyUnitsDetail> dailyDetails = new ArrayList<>();
        for (int i = 0; i < weatherData.getDaily().getTime().size(); i++) {
            dailyDetails.add(new DailyUnitsDetail(weatherData.getDaily().getTime().get(i), weatherData.getDaily().getWeatherCode().get(i), weatherData.getDaily().getWindSpeed10mMax().get(i), locationInformation.getLatitude(), locationInformation.getLongitude(), weatherData.getDaily().getRainSum().get(i), weatherData.getDaily().getTemperature2mMax().get(i)));
        }
        return dailyDetails;
    }


    public void configureGridDaily() {
        this.gridDaily.addClassNames("contact-grid-daily");
        this.gridDaily.setColumns("time", "weatherCode", "windSpeed10mMax", "temperature2mMax", "rainSum");
        this.gridDaily.getColumns().forEach(col -> col.setAutoWidth(true));
        this.gridDaily.asSingleSelect().addValueChangeListener(event -> this.weatherHourlyDetails.setWeatherHourly(event.getValue()));
        this.gridDaily.getColumns().forEach(col -> {
            switch (col.getKey()) {
                case "time":
                    col.setHeader("Date");
                    break;
                case "weatherCode":
                    col.setHeader("Weather Code");
                    break;
                case "windSpeed10mMax":
                    col.setHeader("Wind Speed (10m)");
                    break;
                case "temperature2mMax":
                    col.setHeader("Temperature (2m)");
                    break;
                case "rainSum":
                    col.setHeader("Rain");
                    break;
            }

        });

    }

}
