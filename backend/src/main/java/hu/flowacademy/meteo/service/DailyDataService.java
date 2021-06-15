package hu.flowacademy.meteo.service;


import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.repository.DailyDataRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DailyDataService {

    private final DailyDataRepository dailyDataRepository;

    public List<DailyData> findAll() {
        return dailyDataRepository.findAll();
    }
}
