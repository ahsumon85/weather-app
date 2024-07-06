package com.weather.dto.detail;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
@Data
public class WeatherData {
    private double latitude;

    private double longitude;

    @JsonProperty("generationtime_ms")
    private double generationtimeMs;

    @JsonProperty("utc_offset_seconds")
    private int utcOffsetSeconds;

    private String timezone;

    @JsonProperty("timezone_abbreviation")
    private String timezoneAbbreviation;

    private double elevation;

    @JsonProperty("hourly_units")
    private HourlyUnits hourlyUnits;

    private Hourly hourly;

    @JsonProperty("daily_units")
    private DailyUnits dailyUnits;

    private Daily daily;
}