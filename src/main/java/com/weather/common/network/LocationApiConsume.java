package com.weather.common.network;

import com.weather.common.config.AppConfig;
import com.weather.dto.detail.LocationInformation;
import com.weather.dto.detail.LocationResponse;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LocationApiConsume extends NetworkService {

    public LocationApiConsume(AppConfig appConfig) {
        super();
        super.setUrl(appConfig.getLOCATION_API());
    }

    public List<LocationInformation> fetchLocationResponse(String filterText) {
        Map<String, String> queryParams = new HashMap<>();
        queryParams.put("name", filterText);
        queryParams.put("count", "100");
        queryParams.put("language", "en");
        queryParams.put("format", "json");
        return this.getApiResponse("/", queryParams, LocationResponse.class).getResults();
    }
}
