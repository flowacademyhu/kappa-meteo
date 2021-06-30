package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.AirDataDto;
import hu.flowacademy.meteo.dto.MeasurementDto;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.service.MeasurementService;
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

    private final MeasurementService measurementService;

    @GetMapping("stations/{stationId}/air")
    public List<AirDataDto> findAllMeasurementsBy(@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
                                                   @RequestParam("type") Type type, @PathVariable Long stationId) throws ParseException {
        return measurementService.findAllMeasurementsBy(startDate, endDate, type, stationId).stream().map(MeasurementDto::getAirDataDto).collect(Collectors.toList());
    }
}




