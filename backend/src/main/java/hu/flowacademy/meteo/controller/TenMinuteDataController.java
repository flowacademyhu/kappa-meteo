package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.TenMinuteData;
import hu.flowacademy.meteo.service.TenMinuteDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TenMinuteDataController {

    private final TenMinuteDataService tenMinuteDataService;

    @GetMapping("api/ten-min")
    public List<TenMinuteData> findAll() {
        return tenMinuteDataService.findAll();
    }
}
