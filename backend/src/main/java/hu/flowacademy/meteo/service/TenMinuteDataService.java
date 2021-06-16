package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.TenMinuteData;
import hu.flowacademy.meteo.repository.TenMinuteDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TenMinuteDataService {

    private final TenMinuteDataRepository tenMinuteDataRepository;

    public List<TenMinuteData> findAll() {
        return tenMinuteDataRepository.findAll();
    }
}
