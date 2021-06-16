package hu.flowacademy.meteo.service;


import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.repository.DailyDataRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class DailyDataService {

    private final DailyDataRepository dailyDataRepository;

    public DailyData findOne(Integer id) {
        return dailyDataRepository.findByStationId(id);
    }
}
