package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.service.HourlyDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class HourlyDataController {

    private final HourlyDataService hourlyDataService;

    @GetMapping("api/hourly/{id}")
    public HourlyData findOne(@PathVariable Integer id) {
        return hourlyDataService.findOne(id);
    }
}
