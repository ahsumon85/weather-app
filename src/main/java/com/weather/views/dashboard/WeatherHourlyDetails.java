package com.weather.views.dashboard;

import com.vaadin.flow.component.grid.Grid;
import com.weather.common.network.WeatherApiConsume;
import com.weather.dto.detail.DailyUnitsDetail;
import com.weather.dto.detail.HourlyUnitsDetail;
import com.weather.dto.detail.WeatherData;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
public class WeatherHourlyDetails {

    public final Grid<HourlyUnitsDetail> gridHourly = new Grid<>(HourlyUnitsDetail.class);
    private final WeatherApiConsume weatherApiConsume;
    private final WeatherHourlyDetailsChart weatherHourlyDetailsChart;

    public WeatherHourlyDetails(WeatherApiConsume weatherApiConsume,
                                WeatherHourlyDetailsChart weatherHourlyDetailsChart) {
        this.weatherApiConsume = weatherApiConsume;
        this.weatherHourlyDetailsChart = weatherHourlyDetailsChart;
    }

    public void setWeatherHourly(DailyUnitsDetail value) {
        WeatherData weatherData = this.weatherApiConsume.fetchHourlyWeatherData(value);
        List<HourlyUnitsDetail> hourlyDetails = this.createHourlyDetails(weatherData);
        this.gridHourly.setItems(hourlyDetails);
        this.weatherHourlyDetailsChart.buildChart(weatherData);
    }

    private List<HourlyUnitsDetail> createHourlyDetails(WeatherData weatherData) {
        if (weatherData == null) {
            return new ArrayList<>();
        }
        List<HourlyUnitsDetail> hourlyDetails = new ArrayList<>();
        for (int i = 0; i < weatherData.getHourly().getTime().size(); i++) {
            hourlyDetails.add(new HourlyUnitsDetail(weatherData.getHourly().getTime().get(i), weatherData.getHourly().getTemperature2m().get(i), weatherData.getHourly().getSurfacePressure().get(i), weatherData.getHourly().getWindSpeed10m().get(i), weatherData.getHourly().getRain().get(i)));
        }
        return hourlyDetails;
    }


    public void configureGridHourly() {
        this.gridHourly.addClassNames("grid-hourly");
        this.gridHourly.setColumns("time", "temperature2m", "surfacePressure", "windSpeed10m", "rain");
        this.gridHourly.getColumns().forEach(col -> col.setAutoWidth(true));
        this.gridHourly.getColumns().forEach(col -> {
            switch (col.getKey()) {
                case "time":
                    col.setHeader("Time");
                    break;
                case "temperature2m":
                    col.setHeader("Temperature");
                    break;
                case "surfacePressure":
                    col.setHeader("Surface Pressure");
                    break;
                case "windSpeed10m":
                    col.setHeader("Wind Speed (10m)");
                    break;
                case "rain":
                    col.setHeader("Rain");
                    break;
            }

        });
    }


}
