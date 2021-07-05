package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.dto.*;
import hu.flowacademy.meteo.model.Measurement;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.repository.MeasurementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class MeasurementService {

    private final MeasurementRepository measurementRepository;

    @Autowired
    public MeasurementService(MeasurementRepository measurementRepository) {
        this.measurementRepository = measurementRepository;
    }

    public MeasurementDto getLastByStationId(Long stationId) {
        return toDto(measurementRepository.findFirstByStationIdOrderByDateDesc(stationId));
    }

    public List<MeasurementDto> findAllMeasurementsBy(Date startDate, Date endDate, Type type, Long stationId) {
        return toDto(measurementRepository.findAllMeasurementsBy(startDate, endDate, type, stationId));
    }

    public MeasurementDto toDto(Measurement measurement) {
        MeasurementDto measurementDto = new MeasurementDto();
        measurementDto.setDate(measurement.getDate());
        measurementDto.setType(measurement.getType());
        measurementDto.setAirDataDto(AirDataDto.toDto(measurement.getAirData()));
        measurementDto.setMiscDataDto(MiscDataDto.toDto(measurement.getMiscData()));
        measurementDto.setSoilDataDto(SoilDataDto.toDto(measurement.getSoilData()));
        measurementDto.setBatteryDataDto(BatteryDataDto.toDto(measurement.getBatteryData()));
        measurementDto.setWindDataDto(WindDataDto.toDto(measurement.getWindData()));
        measurementDto.getAirDataDto().setDate(measurementDto.getDate());
        measurementDto.getMiscDataDto().setDate(measurementDto.getDate());
        measurementDto.getBatteryDataDto().setDate(measurementDto.getDate());
        measurementDto.getSoilDataDto().setDate(measurementDto.getDate());
        measurementDto.getWindDataDto().setDate(measurementDto.getDate());
        return measurementDto;
    }

    public List<MeasurementDto> toDto(List<Measurement> measurementList) {
        return measurementList.stream().map(this::toDto).collect(Collectors.toList());
    }
}
