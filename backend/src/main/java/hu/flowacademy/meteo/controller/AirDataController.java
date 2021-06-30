package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.AirDataDto;
import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.service.MeasurmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class AirDataController {

    private final MeasurmentService measurmentService;

    @GetMapping("air")
    public List<AirDataDto> historicalFilterParams(@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
                                                   @RequestParam("type") Type type, @RequestParam("id") Long id) throws ParseException {
        return measurmentService.historicalFilterParams(startDate, endDate, type, id).stream().map(MeasurmentDto::getAirDataDto).collect(Collectors.toList());
    }
}




