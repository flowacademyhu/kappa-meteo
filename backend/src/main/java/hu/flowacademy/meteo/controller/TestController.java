package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TestController {

    private final TestService testService;

    @GetMapping("api/test")
    public List<DailyData> findAll() {
        return testService.findAll();
    }
}
