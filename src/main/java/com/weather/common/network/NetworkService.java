package com.weather.common.network;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;


@Data
public class NetworkService {
    private WebClient webClient;
    private String url;

    public <T> T getApiResponse(String path, Map<String, String> queryParams, Class<T> targetClass) {
        this.webClient = WebClient.builder().baseUrl(this.url).build();
        return webClient.get().uri(uriBuilder -> {
            uriBuilder.path(path);
            queryParams.forEach(uriBuilder::queryParam);
            return uriBuilder.build();
        }).retrieve().bodyToMono(targetClass).block();
    }
}

