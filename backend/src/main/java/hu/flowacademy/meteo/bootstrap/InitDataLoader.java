package hu.flowacademy.meteo.bootstrap;

import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.model.TenMinuteData;
import hu.flowacademy.meteo.repository.HourlyDataRepository;
import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.model.TenMinuteData;
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
import java.util.*;

@Slf4j
@Component
@RequiredArgsConstructor
public class InitDataLoader implements CommandLineRunner {


    private final TenMinuteDataRepository tenMinutesRepository;
    private final HourlyDataRepository hourlyDataRepository;
    private final DailyDataRepository dailyDataRepository;


    @Transactional(propagation = Propagation.SUPPORTS)
    @Override
    public void run(String... args) throws Exception {
        List<TenMinuteData> tenMinuteDataList = executeTenMinutesSave();
        List<HourlyData> hourlyDataList = executeHourlyDataSave();
        List<DailyData> dailyData = executeDailySave();
    }

    @Transactional
    private List<TenMinuteData> executeTenMinutesSave() {
        List<TenMinuteData> tenMinutes = tenMinutesRepository.saveAll(populateTenMinutes());
        log.info("saved {} tenminutes", tenMinutes.size());
        return tenMinutes;
    }

    @Transactional
    private List<HourlyData> executeHourlyDataSave() {
        List<HourlyData> hourlyDataList = hourlyDataRepository.saveAll(populateHourlyData());
        log.info("saved {} dailyData", hourlyDataList.size());
        return hourlyDataList;
    }
    private List<DailyData> executeDailySave() {
        List<DailyData> daily = dailyDataRepository.saveAll(populateDaily());
        log.info("saved {} daily", daily.size());
        return daily;
    }
    private List<TenMinuteData> populateTenMinutes() {
        String line = "";
        List<TenMinuteData> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_10perc.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                TenMinuteData temp = TenMinuteData.builder().date(data[0])
                        .airHumidity(data[1]).airPressure(data[2]).windSpeed(data[3])
                        .solarCellChargingVoltage(data[4]).externalBatteryVoltage(data[5])
                        .irradiation(data[6]).freeze(data[7]).rain(data[8]).windDirection(data[9])
                        .windGust(data[10]).soilMoisture90cm(data[11]).leafMoisture(data[12])
                        .soilTemperature0cm(data[13]).airTemperature(data[14]).internalBatteryVoltage(data[15])
                        .soilMoisture30cm(data[16]).soilMoisture60cm(data[17]).lightUnit(data[18]).soilMoisture120cm(data[19])
                        .precipitationCounter(data[20]).build();
                list.add(temp);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return list;
    }
    private List<HourlyData> populateHourlyData() {
        String line = "";
        List<HourlyData> hourlyDataList = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_orai.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                HourlyData temp = HourlyData.builder().date(data[0])
                        .airHumidity(data[1]).airPressure(data[2]).windSpeed(data[3])
                        .solarCellChargingVoltage(data[4]).externalBatteryVoltage(data[5])
                        .irradiation(data[6]).freeze(data[7]).rain(data[8]).windDirection(data[9])
                        .windGust(data[10]).soilMoisture90cm(data[11]).leafMoisture(data[12])
                        .soilTemperature0cm(data[13]).airTemperature(data[14]).internalBatteryVoltage(data[15])
                        .soilMoisture30cm(data[16]).soilMoisture60cm(data[17]).lightUnit(data[18]).soilMoisture120cm(data[19])
                        .precipitationCounter(data[20]).build();
                hourlyDataList.add(temp);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return hourlyDataList;
    }
    private List<DailyData> populateDaily() {
        String line = "";
        List<DailyData> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_napi.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                DailyData temp = DailyData.builder().date(data[0])
                        .airHumidity(data[1]).airPressure(data[2]).windSpeed(data[3])
                        .solarCellChargingVoltage(data[4]).externalBatteryVoltage(data[5])
                        .irradiation(data[6]).freeze(data[7]).rain(data[8]).windDirection(data[9])
                        .windGust(data[10]).soilMoisture90cm(data[11]).leafMoisture(data[12])
                        .soilTemperature0cm(data[13]).airTemperature(data[14]).internalBatteryVoltage(data[15])
                        .soilMoisture30cm(data[16]).soilMoisture60cm(data[17]).lightUnit(data[18]).soilMoisture120cm(data[19])
                        .precipitationCounter(data[20]).build();
                list.add(temp);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return list;
    }
}
