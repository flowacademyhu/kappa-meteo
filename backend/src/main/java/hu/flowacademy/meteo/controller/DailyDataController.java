package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.service.DailyDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class DailyDataController {

    private final DailyDataService dailyDataService;

    @GetMapping("api/daily")
    public List<DailyData> findAll() {
        return dailyDataService.findAll();
    }
}
