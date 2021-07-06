package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.StationDto;
import hu.flowacademy.meteo.repository.MeasurementRepository;
import hu.flowacademy.meteo.repository.StationRepository;
import hu.flowacademy.meteo.service.StationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Slf4j
public class StationController {

    private final StationService stationService;
    private final MeasurementRepository measurementRepository;
    private final StationRepository stationRepository;

    @Autowired
    public StationController(StationService stationService, MeasurementRepository measurementRepository, StationRepository stationRepository) {
        this.stationService = stationService;
        this.measurementRepository = measurementRepository;
        this.stationRepository = stationRepository;
    }

    @GetMapping("stations")
    public List<StationDto> listStations() {
        List<StationDto> stationDTOList = stationService.listStations().stream().map(StationDto::toDto).collect(Collectors.toList());
        log.info("Get {} (all) stationDTO.", stationDTOList.size());
        return stationDTOList;
    }

    @GetMapping("hasdata")
    public List<StationDto> listAllWithData() {
        return stationRepository.findAll().stream().map(StationDto::toDto).filter(StationDto::isHasData).collect(Collectors.toList());
    }
}
