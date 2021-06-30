package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.service.TestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TestController {

    private final TestService testService;

    @GetMapping("test/{id}")
    public MeasurmentDto findLastByStationId(@PathVariable Long id) {
        MeasurmentDto testMeasurment= MeasurmentDto.toDto(testService.findLastByStationId(id));
        log.debug("Geting id of station: {}", id);
        return testMeasurment;
    }
}
