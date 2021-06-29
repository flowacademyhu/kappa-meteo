package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.BetweenDatesDto;
import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.dto.WindDataDto;
import hu.flowacademy.meteo.service.MeasurmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class WindDataController {

    private final MeasurmentService measurmentService;

    @PostMapping("wind")
    public List<WindDataDto> getAllBetweenDates
            (@RequestBody BetweenDatesDto betweenDatesDto) {
        return measurmentService.getAllBetweenDates(betweenDatesDto.getStartDate(),
                betweenDatesDto.getEndDate(), betweenDatesDto.getType(), betweenDatesDto.getId()).stream()
                .map(MeasurmentDto::getWindDataDto).collect(Collectors.toList());
    }
}