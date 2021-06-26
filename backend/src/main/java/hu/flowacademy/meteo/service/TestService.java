package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.AirData;
import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.repository.AirDataRepository;
import hu.flowacademy.meteo.repository.MeasurmentRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class TestService {

    private final MeasurmentRepository measurmentRepository;
    private final AirDataRepository airDataRepository;
    public Measurment findLastByStationId(Long id) {
        return measurmentRepository.findFirstByStationIdOrderByDateDesc(id);
    }

    public List<Measurment> findAllByType(Type type){
        return measurmentRepository.findAllByType(type);
    }

    public List<Measurment> findAllByTypeAndStationId(Type type, Long id){
        return measurmentRepository.findAllByTypeAndStationId(type, id);
    }

    public List<Measurment> findAllDateBetween(Date startDate, Date endDate, Type type){
        return measurmentRepository.getAllBetweenDates(startDate, endDate, type);
    }



}
