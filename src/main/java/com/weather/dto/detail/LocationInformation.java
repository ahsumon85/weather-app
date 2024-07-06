package com.weather.dto.detail;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;


@Data
public class LocationInformation {
    private long id;
    private String name;
    private double latitude;
    private double longitude;
    private double elevation;
    @JsonProperty("feature_code")
    private String featureCode;
    @JsonProperty("country_code")
    private String countryCode;
    @JsonProperty("admin1_id")
    private long admin1Id;
    @JsonProperty("admin3_id")
    private long admin3Id;
    @JsonProperty("admin4_id")
    private long admin4Id;
    private String timezone;
    private int population;
    private List<String> postcodes;
    @JsonProperty("country_id")
    private long countryId;
    private String country;
    private String admin1;
    private String admin3;
    private String admin4;
    @JsonProperty("is_favorite")
    private boolean isFavorite;



}
