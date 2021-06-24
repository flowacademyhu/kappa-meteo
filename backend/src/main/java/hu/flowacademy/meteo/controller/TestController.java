package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.model.AirData;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class TestController {

    private final TestService testService;

    @GetMapping("api/test/{id}")
    public MeasurmentDto findLastByStationId(@PathVariable Long id) {
        return MeasurmentDto.toDto(testService.findLastByStationId(id));
    }

    /*@GetMapping("api/test/airdata/{id}")
    public Optional<AirData> findById(@PathVariable Long id) {
        return testService.findById(id);
    }*/

    @GetMapping("test2")
    public List<AirData> findAllByTypeAndStationId(@RequestParam("type") Type type, @RequestParam("id") Long id) {
        return testService.findAllByTypeAndStationId(type, id).stream().map(MeasurmentDto::toDto)
                .collect(Collectors.toList()).stream().map(MeasurmentDto::getAirData).collect(Collectors.toList());
    }
}
