package com.weather.views.dashboard;

import com.vaadin.flow.component.html.NativeLabel;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.formlayout.FormLayout;


public class WeatherDetails extends FormLayout {

    private final WeatherHourlyDetails weatherHourlyDetails;
    private final WeatherDailyDetails weatherDailyDetails;

    public WeatherDetails(WeatherHourlyDetailsChart weatherHourlyDetailsChart,
                          WeatherHourlyDetails weatherHourlyDetails,
                          WeatherDailyDetails weatherDailyDetails) {
        this.weatherHourlyDetails = weatherHourlyDetails;
        this.weatherDailyDetails = weatherDailyDetails;

        addClassName("weather-detail-form");
        this.configureGrids();
        add(this.createTableLayout());
        weatherHourlyDetailsChart.buildChart(null);
        add(weatherHourlyDetailsChart.chart);
    }

    private VerticalLayout createTableLayout() {
        var dailyLayout = new VerticalLayout();
        var hourlyLayout = new VerticalLayout();
        var content = new VerticalLayout();
        var labelDaily = new NativeLabel("Weather Daily Details");
        var labelHourly = new NativeLabel("Weather Hourly Details");

        dailyLayout.add(labelDaily, this.weatherDailyDetails.gridDaily);

        hourlyLayout.add(labelHourly, this.weatherHourlyDetails.gridHourly);

        content.add(dailyLayout, hourlyLayout);
        content.setFlexGrow(2, this.weatherDailyDetails.gridDaily);
        content.setFlexGrow(4, this.weatherHourlyDetails.gridHourly);
        content.addClassName("content");
        content.setSizeFull();
        return content;
    }

    private void configureGrids() {
        this.weatherDailyDetails.configureGridDaily();
        this.weatherHourlyDetails.configureGridHourly();
    }

}
