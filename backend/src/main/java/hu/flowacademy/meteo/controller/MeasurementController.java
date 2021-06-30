package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurementDto;
import hu.flowacademy.meteo.service.MeasurementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MeasurementController {

    private final MeasurementService measurementService;

    @GetMapping("latest")
    public MeasurementDto getLastByStationId(@RequestParam("stationId") Long stationId) {
        log.debug("Geting id of station: {}", stationId);
        return measurementService.getLastByStationId(stationId);
    }
}


