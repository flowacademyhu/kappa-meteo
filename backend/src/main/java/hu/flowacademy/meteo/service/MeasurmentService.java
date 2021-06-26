package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.repository.MeasurmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class MeasurmentService {

    private final MeasurmentRepository measurmentRepository;

    public Measurment getLastByStationId(Long id) {
        return measurmentRepository.findFirstByStationIdOrderByDateDesc(id);
    }
}
