package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.dto.SoilDataDto;
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
public class SoilDataController {

    private final MeasurmentService measurmentService;

    @GetMapping("stations/{stationId}/soil")
    public List<SoilDataDto> historicalFilterParams(@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
                                                   @RequestParam("type") Type type, @PathVariable Long stationId) throws ParseException {
        return measurmentService.historicalFilterParams(startDate, endDate, type, stationId).stream().map(MeasurmentDto::getSoilDataDto).collect(Collectors.toList());
    }
}
