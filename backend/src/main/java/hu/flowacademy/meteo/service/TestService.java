package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.repository.DailyDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class TestService {

    private final DailyDataRepository dailyDataRepository;

    public List<DailyData> findAll() {
        return dailyDataRepository.findAll();
    }
}
