package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.dto.*;
import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.repository.MeasurmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class MeasurmentService {

    private final MeasurmentRepository measurmentRepository;

    public MeasurmentDto getLastByStationId(Long id) {
        return toDto(measurmentRepository.findFirstByStationIdOrderByDateDesc(id));
    }

    public List<MeasurmentDto> historicalFilterParams(Date startDate, Date endDate, Type type, Long id) {
        return toDto(measurmentRepository.historicalFilterParams(startDate, endDate, type, id));
    }

    public MeasurmentDto toDto(Measurment measurment) {
        MeasurmentDto measurmentDto = new MeasurmentDto();
        measurmentDto.setDate(measurment.getDate());
        measurmentDto.setType(measurment.getType());
        measurmentDto.setAirDataDto(AirDataDto.toDto(measurment.getAirData()));
        measurmentDto.setMiscDataDto(MiscDataDto.toDto(measurment.getMiscData()));
        measurmentDto.setSoilDataDto(SoilDataDto.toDto(measurment.getSoilData()));
        measurmentDto.setBatteryDataDto(BatteryDataDto.toDto(measurment.getBatteryData()));
        measurmentDto.setWindDataDto(WindDataDto.toDto(measurment.getWindData()));
        measurmentDto.getAirDataDto().setDate(measurmentDto.getDate());
        measurmentDto.getMiscDataDto().setDate(measurmentDto.getDate());
        measurmentDto.getBatteryDataDto().setDate(measurmentDto.getDate());
        measurmentDto.getSoilDataDto().setDate(measurmentDto.getDate());
        measurmentDto.getWindDataDto().setDate(measurmentDto.getDate());
        return measurmentDto;
    }

    public List<MeasurmentDto> toDto(List<Measurment> measurmentList) {
        return measurmentList.stream().map(this::toDto).collect(Collectors.toList());
    }
}
