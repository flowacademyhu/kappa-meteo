package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.bootstrap.InitDataLoader;
import hu.flowacademy.meteo.model.Station;
import hu.flowacademy.meteo.repository.StationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class StationService {

    private final StationRepository stationRepository;

    public Optional<Station> getStation(String name) {
        return stationRepository.findFirstByName(InitDataLoader.HOME_STATION_NAME);
    }
}
