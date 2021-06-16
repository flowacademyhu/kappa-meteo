package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.model.TenMinuteData;
import hu.flowacademy.meteo.repository.TenMinuteDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class TenMinuteDataService {

    private final TenMinuteDataRepository tenMinuteDataRepository;

    public TenMinuteData findOne(Integer id) {
        return tenMinuteDataRepository.findByStationId(id);
    }
}
