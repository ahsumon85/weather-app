package com.weather.dto.detail;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class HourlyUnitsDetail {
    private String time;
    private double temperature2m;
    private double surfacePressure;
    private double windSpeed10m;
    private double rain;

    public HourlyUnitsDetail() {
    }

    public HourlyUnitsDetail(String time, Double temperature2m, Double surfacePressure, Double windSpeed10m, Double rain) {
        this.temperature2m = temperature2m;
        this.time = time;
        this.surfacePressure = surfacePressure;
        this.windSpeed10m = windSpeed10m;
        this.rain = rain;

    }
}
