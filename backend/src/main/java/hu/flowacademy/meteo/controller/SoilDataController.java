package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.dto.SoilDataDto;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.service.MeasurmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class SoilDataController {

    private final MeasurmentService measurmentService;

    @GetMapping("soil")
    public List<SoilDataDto> getAllBetweenDates
            (@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
             @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
             @RequestParam("type") Type type, @RequestParam("id") Long id) throws ParseException {
        return measurmentService.getAllBetweenDates(startDate, endDate, type, id).stream()
                .map(MeasurmentDto::getSoilDataDto).collect(Collectors.toList());
    }
}