package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.TenMinuteData;
import hu.flowacademy.meteo.service.TenMinuteDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TenMinuteDataController {

    private final TenMinuteDataService tenMinuteDataService;

    @GetMapping("api/tenmin/{id}")
    public TenMinuteData findOne(@PathVariable Integer id) {
        return tenMinuteDataService.findOne(id);
    }
}
