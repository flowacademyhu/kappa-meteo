package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurementDto;
import hu.flowacademy.meteo.service.MeasurementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MeasurementController {

    private final MeasurementService measurementService;

    @GetMapping("latest/{id}")
    public MeasurementDto getLastByStationId(@PathVariable Long stationId) {
        log.debug("Geting id of station: {}", stationId);
        return measurementService.getLastByStationId(stationId);
    }
}


