package hu.flowacademy.meteo.bootstrap;

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
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
        if (tenMinutesRepository.countTenMinuteData() == 0) {
            List<TenMinuteData> tenMinuteDataList = executeTenMinutesSave();
        }
        if (hourlyDataRepository.countHourlyData() == 0) {
            List<HourlyData> hourlyDataList = executeHourlyDataSave();
        }
        if (dailyDataRepository.countDailyData() == 0) {
            List<DailyData> dailyData = executeDailySave();
        }
    }

    private List<TenMinuteData> executeTenMinutesSave() {
        List<TenMinuteData> tenMinutes = tenMinutesRepository.saveAll(populateTenMinutes());
        log.info("saved {} tenminutes", tenMinutes.size());
        return tenMinutes;
    }

    private List<HourlyData> executeHourlyDataSave() {
        List<HourlyData> hourlyDataList = hourlyDataRepository.saveAll(populateHourlyData());
        log.info("saved {} hourly", hourlyDataList.size());
        return hourlyDataList;
    }

    private List<DailyData> executeDailySave() {
        List<DailyData> daily = dailyDataRepository.saveAll(populateDaily());
        log.info("saved {} daily", daily.size());
        return daily;
    }

    DateFormat format = new SimpleDateFormat("yyyy.MM.dd HH:mm", Locale.forLanguageTag("HU-hu"));
    DateFormat format2 = new SimpleDateFormat("yyyy. MM. dd. HH:mm", Locale.forLanguageTag("HU-hu"));

    public double doubleFormatter(String str) {
        if (str.equals("")) {
            str = "0.0";
        }
        return Double.parseDouble(str.replace(",", "."));
    }

    public int intFormatter(String str) {
        if (str.equals("")) {
            str = "0";
        }
        return Integer.parseInt(str.replace(",", "."));
    }

    private List<TenMinuteData> populateTenMinutes() {
        String line = "";
        List<TenMinuteData> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_10perc.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                TenMinuteData temp = TenMinuteData.builder().date(format.parse(data[0]))
                        .airHumidity(doubleFormatter(data[1])).airPressure(doubleFormatter(data[2]))
                        .windSpeed(doubleFormatter(data[3]))
                        .solarCellChargingVoltage(doubleFormatter(data[4]))
                        .externalBatteryVoltage(doubleFormatter(data[5]))
                        .irradiation(doubleFormatter(data[6])).freeze(doubleFormatter(data[7]))
                        .rain(doubleFormatter(data[8])).windDirection(doubleFormatter(data[9]))
                        .windGust(doubleFormatter(data[10])).soilMoisture90cm(doubleFormatter(data[11]))
                        .leafMoisture(doubleFormatter(data[12]))
                        .soilTemperature0cm(doubleFormatter(data[13])).airTemperature(doubleFormatter(data[14]))
                        .internalBatteryVoltage(doubleFormatter(data[15]))
                        .soilMoisture30cm(doubleFormatter(data[16])).soilMoisture60cm(doubleFormatter(data[17]))
                        .lightUnit(doubleFormatter(data[18])).soilMoisture120cm(doubleFormatter(data[19]))
                        .precipitationCounter(doubleFormatter(data[20])).build();
                list.add(temp);
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
        return list;
    }

    private List<HourlyData> populateHourlyData() {
        String line = "";
        List<HourlyData> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_orai.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                HourlyData temp = HourlyData.builder().date(format2.parse(data[0]))
                        .airHumidity(doubleFormatter(data[1])).airPressure(doubleFormatter(data[2]))
                        .windSpeed(doubleFormatter(data[3]))
                        .solarCellChargingVoltage(doubleFormatter(data[4]))
                        .externalBatteryVoltage(doubleFormatter(data[5]))
                        .irradiation(doubleFormatter(data[6])).freeze(doubleFormatter(data[7]))
                        .rain(doubleFormatter(data[8])).windDirection(doubleFormatter(data[9]))
                        .windGust(doubleFormatter(data[10])).soilMoisture90cm(doubleFormatter(data[11]))
                        .leafMoisture(doubleFormatter(data[12]))
                        .soilTemperature0cm(doubleFormatter(data[13])).airTemperature(doubleFormatter(data[14]))
                        .internalBatteryVoltage(doubleFormatter(data[15]))
                        .soilMoisture30cm(doubleFormatter(data[16])).soilMoisture60cm(doubleFormatter(data[17]))
                        .lightUnit(doubleFormatter(data[18])).soilMoisture120cm(doubleFormatter(data[19]))
                        .precipitationCounter(doubleFormatter(data[20])).build();
                list.add(temp);
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
        return list;
    }

    private List<DailyData> populateDaily() {
        String line = "";
        List<DailyData> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_napi.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                DailyData temp = DailyData.builder().date(format.parse(data[0]))
                        .airHumidity(doubleFormatter(data[1])).airPressure(doubleFormatter(data[2]))
                        .windSpeed(doubleFormatter(data[3]))
                        .solarCellChargingVoltage(doubleFormatter(data[4]))
                        .externalBatteryVoltage(doubleFormatter(data[5]))
                        .irradiation(doubleFormatter(data[6])).freeze(doubleFormatter(data[7]))
                        .rain(doubleFormatter(data[8])).windDirection(doubleFormatter(data[9]))
                        .windGust(doubleFormatter(data[10])).soilMoisture90cm(doubleFormatter(data[11]))
                        .leafMoisture(doubleFormatter(data[12]))
                        .soilTemperature0cm(doubleFormatter(data[13])).airTemperature(doubleFormatter(data[14]))
                        .internalBatteryVoltage(doubleFormatter(data[15]))
                        .soilMoisture30cm(doubleFormatter(data[16])).soilMoisture60cm(doubleFormatter(data[17]))
                        .lightUnit(doubleFormatter(data[18])).soilMoisture120cm(doubleFormatter(data[19]))
                        .precipitationCounter(doubleFormatter(data[20])).build();
                list.add(temp);
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
        return list;
    }
}
