package com.weather.dto.detail;


import lombok.Data;
@Data
public class DailyUnits {
    private String time;
    private String weatherCode;
    private String temperature2mMax;
    private String rainSum;
    private String windSpeed10mMax;
}
