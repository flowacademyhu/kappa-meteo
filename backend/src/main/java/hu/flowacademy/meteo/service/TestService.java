package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.AirData;
import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.repository.AirDataRepository;
import hu.flowacademy.meteo.repository.MeasurmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class TestService {

    private final MeasurmentRepository measurmentRepository;
    private final AirDataRepository airDataRepository;

    public Measurment findLastByStationId(Long id) {
        return measurmentRepository.findFirstByStationIdOrderByDateDesc(id);
    }

   /* public Optional<AirData> findById(Long id) {
        return airDataRepository.findById(id);
    }*/

    public List<Measurment> findAllByTypeAndStationId(Type type, Long id){
        return measurmentRepository.findAllByTypeAndStationId(type, id);
    }



}
