package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.StationDto;
import hu.flowacademy.meteo.service.StationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class StationController {

    private final StationService stationService;

    @CrossOrigin
    @GetMapping("api/coordinates")
    public List<StationDto> findAll() {
        return stationService.findAll().stream().map(StationDto::toDto).collect(Collectors.toList());
    }
}
