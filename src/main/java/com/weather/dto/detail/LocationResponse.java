package com.weather.dto.detail;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;


@lombok.Getter
@lombok.Setter
public class LocationResponse {
    private List<LocationInformation> results;

    @JsonProperty("generationtime_ms")
    private double generationtimeMs;
}
