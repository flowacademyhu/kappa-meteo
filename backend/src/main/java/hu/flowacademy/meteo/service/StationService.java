package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.Station;
import hu.flowacademy.meteo.repository.StationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
@RequiredArgsConstructor
public class StationService {

    private final StationRepository stationRepository;

    public List<Station> listStations() {
        return stationRepository.findAll();
    }
}




