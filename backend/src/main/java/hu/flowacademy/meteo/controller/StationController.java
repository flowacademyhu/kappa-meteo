package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.Station;
import hu.flowacademy.meteo.service.StationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping
@RequiredArgsConstructor
public class StationController {

    private final StationService stationService;

    @GetMapping("/api/{date}")
    public Optional<Station> findOneStation(@PathVariable String name, @RequestBody StationService stationService) {
        log.debug("Getting a date");
        return stationService.getStation(name);
    }

}
