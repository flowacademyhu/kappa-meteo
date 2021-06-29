package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.Station;
import hu.flowacademy.meteo.repository.StationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
@RequiredArgsConstructor
@Slf4j
public class StationService {

    private final StationRepository stationRepository;

    public List<Station> listStations() {
        List<Station> stationlist =  stationRepository.findAll();
        log.debug("Number of all stations: {}", stationlist.size());
        return stationlist;
    }
}




