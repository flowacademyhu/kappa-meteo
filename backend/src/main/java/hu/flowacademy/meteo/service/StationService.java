package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.Station;
import hu.flowacademy.meteo.repository.StationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@Slf4j
public class StationService {

    private final StationRepository stationRepository;

    @Autowired
    public StationService(StationRepository stationRepository) {
        this.stationRepository = stationRepository;
    }

    public List<Station> listStations() {
        List<Station> stationlist = stationRepository.findAll();
        log.debug("Number of all stations: {}", stationlist.size());
        return stationlist;
    }

    public List<String> getAllNames() {
        return stationRepository.findAll().stream().map(Station::getName).collect(Collectors.toList());
    }
}




