package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.dto.MeasurmentDto;
import hu.flowacademy.meteo.model.AirData;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class TestController {

    private final TestService testService;

    @GetMapping("test/{id}")
    public MeasurmentDto findLastByStationId(@PathVariable Long id) {
        return MeasurmentDto.toDto(testService.findLastByStationId(id));
    }
//
//    @GetMapping("test")
//    public List<MeasurmentDto> findAllByType(@RequestParam("type") Type type) {
//        return testService.findAllByType(type).stream().map(MeasurmentDto::toDto).collect(Collectors.toList());
//    }
//
//    @GetMapping("test2")
//    public List<AirData> findAllByTypeAndStationId(@RequestParam("type") Type type, @RequestParam("id") Long id) {
//        return testService.findAllByTypeAndStationId(type, id).stream().map(MeasurmentDto::toDto)
//                .collect(Collectors.toList()).stream().map(MeasurmentDto::getAirData).collect(Collectors.toList());
//    }

    @GetMapping("test/date")
    public List<MeasurmentDto> findAllByDate(@RequestParam("start") @DateTimeFormat(pattern = "yyyy.MM.dd. HH:mm") Date startDate
            , @RequestParam("end") @DateTimeFormat(pattern = "yyyy.MM.dd. HH:mm") Date endDate, @RequestParam("type") Type type) throws ParseException {

        return testService.findAllDateBetween(startDate, endDate, type).stream().map(MeasurmentDto::toDto).collect(Collectors.toList());
    }


}
