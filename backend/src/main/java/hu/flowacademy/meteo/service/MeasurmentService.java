package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.repository.MeasurmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MeasurmentService {

    private final MeasurmentRepository measurmentRepository;

    public Measurment getLastByStationId(Long id) {
        return measurmentRepository.findFirstByStationIdOrderByDateDesc(id);
    }

    public List<Measurment> getAllBetweenDates(Date startDate, Date endDate, Type type, Long id) {
        return measurmentRepository.getAllBetweenDates(startDate, endDate, type, id);
    }
}
