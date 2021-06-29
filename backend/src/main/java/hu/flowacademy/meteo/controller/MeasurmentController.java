package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.service.MeasurmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MeasurmentController {

    private final MeasurmentService measurmentService;

    @GetMapping("latest/{id}")
    public MeasurmentDto getLastByStationId(@PathVariable Long id) {
        return measurmentService.getLastByStationId(id);
    }
}
