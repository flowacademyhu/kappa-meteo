package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.AirDataDto;
import hu.flowacademy.meteo.dto.BetweenDatesDto;
import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.service.MeasurmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class AirDataController {

    private final MeasurmentService measurmentService;

    @PostMapping("air")
    public List<AirDataDto> getAllBetweenDates
            (@RequestBody BetweenDatesDto betweenDatesDto) {
        return measurmentService.getAllBetweenDates(betweenDatesDto.getStartDate(),
                betweenDatesDto.getEndDate(), betweenDatesDto.getType(), betweenDatesDto.getId()).stream()
                .map(MeasurmentDto::getAirDataDto).collect(Collectors.toList());
    }
}
