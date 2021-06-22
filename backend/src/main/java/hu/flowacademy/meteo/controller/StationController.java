package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.model.Station;
import hu.flowacademy.meteo.service.StationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class StationController {

    private final StationService stationService;

    @CrossOrigin
    @GetMapping("api/coordinates")
    public List<Station> findAll() {
        return stationService.findAll();
    }
}
