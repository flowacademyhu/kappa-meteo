package hu.flowacademy.meteo.bootstrap;

import hu.flowacademy.meteo.dto.MetDataDto;
import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.model.TenMinuteData;
import hu.flowacademy.meteo.repository.HourlyDataRepository;
import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.repository.DailyDataRepository;
import hu.flowacademy.meteo.repository.TenMinuteDataRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Component
@RequiredArgsConstructor
public class InitDataLoader implements CommandLineRunner {

    private final TenMinuteDataRepository tenMinutesRepository;
    private final HourlyDataRepository hourlyDataRepository;
    private final DailyDataRepository dailyDataRepository;

    DateFormat DATE_FORMAT_HU = new SimpleDateFormat("yyyy.MM.dd HH:mm", Locale.forLanguageTag("HU-hu"));
    DateFormat DATE_FORMAT_HU_SPACED = new SimpleDateFormat("yyyy. MM. dd. HH:mm", Locale.forLanguageTag("HU-hu"));

    String[] fileName = {"CSIHA_HQ_10perc", "CSIHA_HQ_orai", "CSIHA_HQ_napi"};

    @Transactional(propagation = Propagation.SUPPORTS)
    @Override
    public void run(String... args) {
        if (tenMinutesRepository.count() == 0) {
            executeTenMinutesSave();
        }
        if (hourlyDataRepository.count() == 0) {
            executeHourlyDataSave();
        }
        if (dailyDataRepository.count() == 0) {
            executeDailySave();
        }
    }

    private void executeTenMinutesSave() {
        List<TenMinuteData> tenMinutes = tenMinutesRepository.saveAll(populateDataBase(fileName[0], DATE_FORMAT_HU)
                .stream().map(MetDataDto::toTenEntity).collect(Collectors.toList()));
        log.info("saved {} tenminutes", tenMinutes.size());
    }

    private void executeHourlyDataSave() {
        List<HourlyData> hourlyDataList = hourlyDataRepository.saveAll(populateDataBase(fileName[1], DATE_FORMAT_HU_SPACED)
                .stream().map(MetDataDto::toHourlyEntity).collect(Collectors.toList()));
        log.info("saved {} hourly", hourlyDataList.size());
    }

    private void executeDailySave() {
        List<DailyData> daily = dailyDataRepository.saveAll(populateDataBase(fileName[2], DATE_FORMAT_HU)
                .stream().map(MetDataDto::toDailyEntity).collect(Collectors.toList()));
        log.info("saved {} daily", daily.size());
    }

    public Object doubleFormatter(String str) {
        if (str.equals("")) {
            return null;
        }
        return Double.parseDouble(str.replace(",", "."));
    }

    private List<MetDataDto> populateDataBase(String name, DateFormat format) {
        String line = "";
        List<MetDataDto> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/" + name + ".csv", StandardCharsets.UTF_8));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                MetDataDto temp = MetDataDto.builder().date(format.parse(data[0]))
                        .airHumidity((Double) doubleFormatter(data[1])).airPressure((Double) doubleFormatter(data[2]))
                        .windSpeed((Double) doubleFormatter(data[3]))
                        .solarCellChargingVoltage((Double) doubleFormatter(data[4]))
                        .externalBatteryVoltage((Double) doubleFormatter(data[5]))
                        .irradiation((Double) doubleFormatter(data[6])).freeze((Double) doubleFormatter(data[7]))
                        .rain((Double) doubleFormatter(data[8])).windDirection((Double) doubleFormatter(data[9]))
                        .windGust((Double) doubleFormatter(data[10])).soilMoisture90cm((Double) doubleFormatter(data[11]))
                        .leafMoisture((Double) doubleFormatter(data[12]))
                        .soilTemperature0cm((Double) doubleFormatter(data[13])).airTemperature((Double) doubleFormatter(data[14]))
                        .internalBatteryVoltage((Double) doubleFormatter(data[15]))
                        .soilMoisture30cm((Double) doubleFormatter(data[16])).soilMoisture60cm((Double) doubleFormatter(data[17]))
                        .lightUnit((Double) doubleFormatter(data[18])).soilMoisture120cm((Double) doubleFormatter(data[19]))
                        .precipitationCounter((Double) doubleFormatter(data[20])).build();
                list.add(temp);
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
        return list;
    }
}
