package com.weather.dto.detail;

import java.util.List;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
@Data
public class Hourly {

    private List<String> time;

    @JsonProperty("temperature_2m")
    private List<Double> temperature2m;

    @JsonProperty("wind_speed_10m")
    private List<Double> windSpeed10m;

    @JsonProperty("surface_pressure")
    private List<Double> surfacePressure;

    private List<Double> rain;

}
