package com.weather.views.dashboard;

import com.weather.dto.detail.WeatherData;
import org.springframework.stereotype.Component;
import org.vaadin.addons.chartjs.ChartJs;
import org.vaadin.addons.chartjs.config.BarChartConfig;
import org.vaadin.addons.chartjs.data.BarDataset;
import org.vaadin.addons.chartjs.data.Dataset;
import org.vaadin.addons.chartjs.data.LineDataset;
import org.vaadin.addons.chartjs.options.Position;
import java.util.ArrayList;
import java.util.List;


@Component
public class WeatherHourlyDetailsChart {

    final protected ChartJs chart = new ChartJs();

      public void buildChart(WeatherData weatherData) {


        BarChartConfig config = new BarChartConfig();
        config.data().addDataset(new BarDataset().type().label("Wind speed").backgroundColor("rgba(60, 179, 113,0.5)").borderColor("white").borderWidth(2)).addDataset(new LineDataset().type().label("Temperature").backgroundColor("rgba(151,187,205,0.5)").borderColor("white").borderWidth(2)).and();

        config.options().responsive(true).title().display(true).position(Position.LEFT).text("Hourly Temperature").and().done();


        if (weatherData != null) {
            config.data().labelsAsList(weatherData.getHourly().getTime());
            List<String> labels = config.data().getLabels();
            for (Dataset<?, ?> dataset : config.data().getDatasets()) {
                List<Double> data = new ArrayList<>();

                if (dataset instanceof BarDataset) {
                    for (int i = 0; i < labels.size(); i++) {
                        data.add((double) (weatherData.getHourly().getWindSpeed10m()).get(i));
                    }
                    BarDataset bds = (BarDataset) dataset;
                    bds.dataAsList(data);
                }

                if (dataset instanceof LineDataset) {
                    for (int i = 0; i < labels.size(); i++) {
                        data.add((double) (weatherData.getHourly().getTemperature2m().get(i)));
                    }
                    LineDataset lds = (LineDataset) dataset;
                    lds.dataAsList(data);
                }
            }
        }
        chart.configure(config);
        chart.setWidth("100%");
        chart.setHeight("5px");
        chart.refreshData();
    }

}
