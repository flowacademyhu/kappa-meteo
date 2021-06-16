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

    public Object doubleFormatter(String str) {
        if (str.equals("")) {
            return null;
        }
        return Double.parseDouble(str.replace(",", "."));
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

    private List<HourlyData> populateHourlyData() {
        String line = "";
        List<HourlyData> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_orai.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                HourlyData temp = HourlyData.builder().date(format2.parse(data[0]))
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

    private List<DailyData> populateDaily() {
        String line = "";
        List<DailyData> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_napi.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                DailyData temp = DailyData.builder().date(format.parse(data[0]))
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
