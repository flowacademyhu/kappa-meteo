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
    private static final String[] FILE_NAME = {"CSIHA_HQ_10perc", "CSIHA_HQ_orai", "CSIHA_HQ_napi", "public_allomasok"};
    private static final String HOME_STATION_NAME = "Szeged";

    @Override
    public void run(String... args) {
        if (stationRepository.count() == 0) {
            executeStationSave();
        }
        Optional<Station> homeStation = stationRepository.findFirstByName(HOME_STATION_NAME);
        if (homeStation.isPresent()) {
            if (tenMinutesRepository.count() == 0) {
                executeTenMinutesSave(homeStation.orElseGet(null));
            }
            if (hourlyDataRepository.count() == 0) {
                executeHourlyDataSave(homeStation.orElseGet(null));
            }
            if (dailyDataRepository.count() == 0) {
                executeDailySave(homeStation.orElseGet(null));
            }
        } else {
            log.warn("No station '{}' found for file import", HOME_STATION_NAME);
        }

    }

    private void executeTenMinutesSave(Station station) {
        List<TenMinuteData> tenMinutes = tenMinutesRepository.saveAll(populateDataBase(csvData(FILE_NAME[0]), DATE_FORMAT_HU, station)
                .stream().map(MetDataDto::toTenEntity).collect(Collectors.toList()));
        log.info("saved {} tenminutes", tenMinutes.size());
    }

    private void executeHourlyDataSave(Station station) {
        List<HourlyData> hourlyDataList = hourlyDataRepository.saveAll(populateDataBase(csvData(FILE_NAME[1]), DATE_FORMAT_HU_SPACED, station)
                .stream().map(MetDataDto::toHourlyEntity).collect(Collectors.toList()));
        log.info("saved {} hourly", hourlyDataList.size());
    }

    private void executeDailySave(Station station) {
        List<DailyData> daily = dailyDataRepository.saveAll(populateDataBase(csvData(FILE_NAME[2]), DATE_FORMAT_HU, station)
                .stream().map(MetDataDto::toDailyEntity).collect(Collectors.toList()));
        log.info("saved {} daily", daily.size());
    }

    private void executeStationSave() {
        List<Station> stations = stationRepository.saveAll(populateStations(csvData(FILE_NAME[3])));
        log.info("saved {} station", stations.size());
    }

    public Object doubleFormatter(String str) {
        if (str.equals("")) {
            return null;
        }
        return Double.parseDouble(str.replace(",", "."));
    }

    private String csvData(String name) {
        return "src/main/resources/" + name + ".csv";
    }

    private List<MetDataDto> populateDataBase(String name, DateFormat format, Station station) {
        String line;
        List<MetDataDto> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(name, StandardCharsets.ISO_8859_1))) {
            br.readLine();
            int counter = 1;
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
                            .precipitationCounter((Double) doubleFormatter(data[20])).station(station).build();
                    list.add(temp);
                    counter++;
                } catch (NumberFormatException | ParseException e) {
                    log.error("Error while reading at the line {}: {}: {}", counter, br.readLine(), e.getMessage(), e);
                }
            }
        } catch (IOException e) {
            log.error("Error while opening file {}: {}", name, e.getMessage());
        }
        return list;
    }

    private List<Station> populateStations(String name) {
        String line;
        List<Station> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(name, StandardCharsets.ISO_8859_1))) {
            br.readLine();
            int counter = 1;
            while ((line = br.readLine()) != null) {
                try {
                    String[] data = line.split(",", -1);
                    Station temp = Station.builder().name(data[0]).longitude((Double) doubleFormatter(data[1])).latitude((Double) doubleFormatter(data[2])).build();
                    list.add(temp);
                    counter++;
                } catch (NumberFormatException e) {
                    log.error("Error while reading at the line {}: {}: {}", counter, br.readLine(), e.getMessage(), e);
                }
            }
        } catch (IOException e) {
            log.error("Error while opening file {}: {}", name, e.getMessage());
        }
        return list;
    }
}