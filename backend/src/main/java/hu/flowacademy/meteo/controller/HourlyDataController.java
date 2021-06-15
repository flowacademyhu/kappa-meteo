package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.model.TenMinuteData;
import hu.flowacademy.meteo.service.HourlyDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class HourlyDataController {

    private final HourlyDataService hourlyDataService;

    @GetMapping("api/hourly")
    public List<HourlyData> findAll() {
        return hourlyDataService.findAll();
    }
}
