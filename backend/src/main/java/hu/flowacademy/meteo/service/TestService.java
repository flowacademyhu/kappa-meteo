package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.repository.MeasurmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class TestService {

    private final MeasurmentRepository measurmentRepository;

    public Measurment findLastByStationId(Long id) {
        return measurmentRepository.findFirstByStationIdOrderByDateDesc(id);
    }




}
