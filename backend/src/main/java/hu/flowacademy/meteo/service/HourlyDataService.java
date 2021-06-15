package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.repository.HourlyDataRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class HourlyDataService {

    private final HourlyDataRepository hourlyDataRepository;

    public List<HourlyData> findAll() {
        return hourlyDataRepository.findAll();
    }
}
