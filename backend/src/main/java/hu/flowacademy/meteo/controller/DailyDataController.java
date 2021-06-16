package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.service.DailyDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class DailyDataController {

    private final DailyDataService dailyDataService;

    @GetMapping("api/daily/{id}")
    public DailyData findOne(@PathVariable Integer id) {
        return dailyDataService.findOne(id);
    }
}
