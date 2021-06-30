package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.*;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.service.MeasurementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Slf4j
public class DataController {

    private final MeasurementService measurementService;

    @GetMapping("latest")
    public MeasurementDto getLastByStationId(@RequestParam("stationId") Long stationId) {
        log.debug("Geting id of station: {}", stationId);
        return measurementService.getLastByStationId(stationId);
    }

    @GetMapping("stations/{stationId}/air")
    public List<AirDataDto> findAllAirMeasurementsBy(@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
                                                  @RequestParam("type") Type type, @PathVariable Long stationId) throws ParseException {
        return measurementService.findAllMeasurementsBy(startDate, endDate, type, stationId).stream().map(MeasurementDto::getAirDataDto).collect(Collectors.toList());
    }

    @GetMapping("stations/{stationId}/battery")
    public List<BatteryDataDto> findAllBatteryMeasurementsBy(@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
                                                      @RequestParam("type") Type type, @PathVariable Long stationId) throws ParseException {
        return measurementService.findAllMeasurementsBy(startDate, endDate, type, stationId).stream().map(MeasurementDto::getBatteryDataDto).collect(Collectors.toList());
    }

    @GetMapping("stations/{stationId}/misc")
    public List<MiscDataDto> findAllMiscMeasurementsBy(@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
                                                   @RequestParam("type") Type type, @PathVariable Long stationId) throws ParseException {
        return measurementService.findAllMeasurementsBy(startDate, endDate, type, stationId).stream().map(MeasurementDto::getMiscDataDto).collect(Collectors.toList());
    }

    @GetMapping("stations/{stationId}/soil")
    public List<SoilDataDto> findAllSoilMeasurementsBy(@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
                                                   @RequestParam("type") Type type, @PathVariable Long stationId) throws ParseException {
        return measurementService.findAllMeasurementsBy(startDate, endDate, type, stationId).stream().map(MeasurementDto::getSoilDataDto).collect(Collectors.toList());
    }

    @GetMapping("stations/{stationId}/wind")
    public List<WindDataDto> findAllWindMeasurementsBy(@RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate,
                                                       @RequestParam("type") Type type, @PathVariable Long stationId) throws ParseException {
        return measurementService.findAllMeasurementsBy(startDate, endDate, type, stationId).stream().map(MeasurementDto::getWindDataDto).collect(Collectors.toList());
    }
}
