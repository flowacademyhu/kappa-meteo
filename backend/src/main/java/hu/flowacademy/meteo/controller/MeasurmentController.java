package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.service.MeasurmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MeasurmentController {

    private final MeasurmentService measurmentService;

    @GetMapping("latest/{id}")
    public MeasurmentDto getLastByStationId(@PathVariable Long stationId) {
        log.debug("Geting id of station: {}", stationId);
        return measurmentService.getLastByStationId(stationId);
    }
}


