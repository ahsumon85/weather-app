package com.weather.common.network;

import com.weather.common.config.AppConfig;
import com.weather.dto.detail.DailyUnitsDetail;
import com.weather.dto.detail.LocationInformation;
import com.weather.dto.detail.WeatherData;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class WeatherApiConsume extends NetworkService {

    public WeatherApiConsume(AppConfig appConfig) {
        super();
        super.setUrl(appConfig.getWEATHER_API());
    }

    public WeatherData fetchWeatherResponse(LocationInformation locationInformation) {
        Map<String, String> queryParams = new HashMap<>();
        queryParams.put("latitude", String.valueOf(locationInformation.getLatitude()));
        queryParams.put("longitude", String.valueOf(locationInformation.getLongitude()));
        queryParams.put("daily", "weather_code,wind_speed_10m_max,temperature_2m_max,rain_sum");
        return this.getApiResponse("/", queryParams, WeatherData.class);
    }

    public WeatherData fetchHourlyWeatherData(DailyUnitsDetail value) {
        if (value == null) {
            return null;
        }
        Map<String, String> queryParams = new HashMap<>();
        queryParams.put("latitude", String.valueOf(value.getLatitude()));
        queryParams.put("longitude", String.valueOf(value.getLongitude()));
        queryParams.put("hourly", "temperature_2m,rain,surface_pressure,wind_speed_10m");

        queryParams.put("start_date", value.getTime());
        queryParams.put("end_date", value.getTime());
        return this.getApiResponse("/", queryParams, WeatherData.class);

    }

}
