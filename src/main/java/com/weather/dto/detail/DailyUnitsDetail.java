package com.weather.dto.detail;

@lombok.Data
public class DailyUnitsDetail {
    private double latitude;
    private double longitude;
    private String time;
    private String weatherCode;
    private String windSpeed10mMax;
    private String temperature2mMax;
    private String rainSum;



    public DailyUnitsDetail(String time, Integer weatherCode, Double windSpeed10mMax, double latitude, double longitude, double temperature2mMax, double rainSum) {

        this.time = time;
        this.weatherCode = String.valueOf(weatherCode);
        this.windSpeed10mMax = String.valueOf(windSpeed10mMax);
        this.latitude = latitude;
        this.longitude = longitude;
        this.temperature2mMax = String.valueOf(temperature2mMax);
        this.rainSum = String.valueOf(rainSum);
    }
}
