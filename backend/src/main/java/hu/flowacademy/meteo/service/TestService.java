package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.repository.MeasurmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class TestService {

    private final MeasurmentRepository measurmentRepository;

    public Measurment findLastByStationId(Long id) {
        Measurment stationId = measurmentRepository.findFirstByStationIdOrderByDateDesc(id);
        log.debug("Id of the searched station: {}", id);
        return stationId;
    }
}
