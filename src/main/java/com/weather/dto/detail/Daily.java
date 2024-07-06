package com.weather.dto.detail;

import java.util.List;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Daily {

    private List<String> time;

    @JsonProperty("weather_code")
    private List<Integer> weatherCode;

    @JsonProperty("wind_speed_10m_max")
    private List<Double> windSpeed10mMax;

    @JsonProperty("temperature_2m_max")
    private List<Double> temperature2mMax;

    @JsonProperty("rain_sum")
    private List<Double> rainSum;


}
