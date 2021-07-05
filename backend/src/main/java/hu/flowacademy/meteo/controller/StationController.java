package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.StationDto;
import hu.flowacademy.meteo.service.StationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
public class StationController {

    private final StationService stationService;

    @Autowired
    public StationController(StationService stationService) {
        this.stationService = stationService;
    }

    @GetMapping("stations")
    public List<StationDto> listStations() {
        List<StationDto> stationDTOList = stationService.listStations().stream().map(StationDto::toDto).collect(Collectors.toList());
        log.info("Get {} (all) stationDTO.", stationDTOList.size());
        return stationDTOList;
    }

    @GetMapping("names")
    public List<String> listAllNames() {
        List<String> stationNameList = stationService.listStations().stream().map(StationDto::toDto).map(StationDto::getName).
                collect(Collectors.toList());
        log.info("Get {} station names.", stationNameList.size());
        return stationNameList;
    }
}
