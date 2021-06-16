package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.repository.HourlyDataRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class HourlyDataService {

    private final HourlyDataRepository hourlyDataRepository;

    public HourlyData findOne(Integer id) {
        return hourlyDataRepository.findByStationId(id);
    }
}
