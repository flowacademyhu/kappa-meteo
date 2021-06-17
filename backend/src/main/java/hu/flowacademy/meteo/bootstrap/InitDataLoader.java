package hu.flowacademy.meteo.bootstrap;

import hu.flowacademy.meteo.dto.MetDataDto;
import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.model.Station;
import hu.flowacademy.meteo.model.TenMinuteData;
import hu.flowacademy.meteo.repository.HourlyDataRepository;
import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.repository.DailyDataRepository;
import hu.flowacademy.meteo.repository.StationRepository;
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
    private final StationRepository stationRepository;

    private static final DateFormat DATE_FORMAT_HU = new SimpleDateFormat("yyyy.MM.dd HH:mm", Locale.forLanguageTag("HU-hu"));
    private static final DateFormat DATE_FORMAT_HU_SPACED = new SimpleDateFormat("yyyy. MM. dd. HH:mm", Locale.forLanguageTag("HU-hu"));

    String[] FILENAME = {"CSIHA_HQ_10perc", "CSIHA_HQ_orai", "CSIHA_HQ_napi", "public_allomasok"};

    @Transactional(propagation = Propagation.SUPPORTS)
    @Override
    public void run(String... args) throws IOException {
        if (tenMinutesRepository.count() == 0) {
            executeTenMinutesSave();
        }
        if (hourlyDataRepository.count() == 0) {
            executeHourlyDataSave();
        }
        if (dailyDataRepository.count() == 0) {
            executeDailySave();
        }
        if (stationRepository.count() == 0) {
            executeStationSave();
        }
    }

    private void executeTenMinutesSave() throws IOException {
        List<TenMinuteData> tenMinutes = tenMinutesRepository.saveAll(populateDataBase(FILENAME[0], DATE_FORMAT_HU)
                .stream().map(MetDataDto::toTenEntity).collect(Collectors.toList()));
        log.info("saved {} tenminutes", tenMinutes.size());
    }

    private void executeHourlyDataSave() throws IOException {
        List<HourlyData> hourlyDataList = hourlyDataRepository.saveAll(populateDataBase(FILENAME[1], DATE_FORMAT_HU_SPACED)
                .stream().map(MetDataDto::toHourlyEntity).collect(Collectors.toList()));
        log.info("saved {} hourly", hourlyDataList.size());
    }

    private void executeDailySave() throws IOException {
        List<DailyData> daily = dailyDataRepository.saveAll(populateDataBase(FILENAME[2], DATE_FORMAT_HU)
                .stream().map(MetDataDto::toDailyEntity).collect(Collectors.toList()));
        log.info("saved {} daily", daily.size());
    }

    private void executeStationSave() throws IOException {
        List<Station> stations = stationRepository.saveAll(populateStations(FILENAME[3]));
        log.info("saved {} station", stations.size());
    }

    public Object doubleFormatter(String str) {
        if (str.equals("")) {
            return null;
        }
        return Double.parseDouble(str.replace(",", "."));
    }

    private List<MetDataDto> populateDataBase(String name, DateFormat format) throws IOException {
        String line;
        List<MetDataDto> list = new ArrayList<>();
        BufferedReader br = new BufferedReader(new FileReader("src/main/resources/" + name + ".csv", StandardCharsets.ISO_8859_1));
        br.readLine();
        while ((line = br.readLine()) != null) {
            try {
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

            } catch (NumberFormatException | ParseException e) {
                log.error("Error while reading at the line: {}", br.readLine());
            }
        }
        br.close();
        return list;
    }

    private List<Station> populateStations(String name) throws IOException {
        String line;
        List<Station> list = new ArrayList<>();
        BufferedReader br = new BufferedReader(new FileReader("src/main/resources/" + name + ".csv", StandardCharsets.ISO_8859_1));
        br.readLine();
        while ((line = br.readLine()) != null) {
            try {
                String[] data = line.split(",", -1);
                Station temp = Station.builder().name(data[0]).longitude((Double) doubleFormatter(data[1])).latitude((Double) doubleFormatter(data[2])).build();
                list.add(temp);

            } catch (NumberFormatException e) {
                log.error("Error while reading at the line: {}", br.readLine());
            }
        }
        br.close();
        return list;
    }
}