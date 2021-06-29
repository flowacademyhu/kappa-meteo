package hu.flowacademy.meteo.bootstrap;

import hu.flowacademy.meteo.model.*;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.repository.*;
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

@Slf4j
@Component
@RequiredArgsConstructor
public class InitDataLoader implements CommandLineRunner {

    private final AirDataRepository airDataRepository;
    private final BatteryDataRepository batteryDataRepository;
    private final MiscDataRepository miscDataRepository;
    private final SoilDataRepository soilDataRepository;
    private final WindDataRepository windDataRepository;
    private final StationRepository stationRepository;
    private final MeasurmentRepository measurmentRepository;

    private static final DateFormat DATE_FORMAT_HU = new SimpleDateFormat("yyyy.MM.dd HH:mm", Locale.forLanguageTag("HU-hu"));
    private static final DateFormat DATE_FORMAT_HU_SPACED = new SimpleDateFormat("yyyy. MM. dd. HH:mm", Locale.forLanguageTag("HU-hu"));
    private static final String[] FILE_NAME = {"CSIHA_HQ_10perc.csv", "CSIHA_HQ_orai.csv", "CSIHA_HQ_napi.csv", "public_allomasok.csv"};
    private static final String HOME_STATION_NAME = "Szeged";

    @Override
    public void run(String... args) {
        log.info("Starting init data loader");
        if (stationRepository.count() == 0) {
            executeStationSave();
        }
        Optional<Station> homeStation = stationRepository.findFirstByName(HOME_STATION_NAME);
        if (homeStation.isPresent()) {
            if (measurmentRepository.count() == 0) {
                executeTenMinuteMeasurmentSave(homeStation.orElseGet(null));
                executeHourlyMeasurmentSave(homeStation.orElseGet(null));
                executeDailyMeasurmentSave(homeStation.orElseGet(null));
            }
        } else {
            log.warn("No station '{}' found for file import", HOME_STATION_NAME);
        }
    }

    private void executeTenMinuteMeasurmentSave(Station station) {
        List<Measurment> tenminMeasurments = measurmentRepository.saveAll(populateTenMin(csvData(FILE_NAME[0]), DATE_FORMAT_HU, station, Type.TEN_MIN));
        log.info("saved {} ten minute measurments", tenminMeasurments.size());
    }

    private void executeHourlyMeasurmentSave(Station station) {
        List<Measurment> hourlyMeasurments = measurmentRepository.saveAll(populateHourly(csvData(FILE_NAME[1]), DATE_FORMAT_HU_SPACED, station, Type.HOURLY));
        log.info("saved {} hourly measurments", hourlyMeasurments.size());
    }

    private void executeDailyMeasurmentSave(Station station) {
        List<Measurment> dailyMeasurments = measurmentRepository.saveAll(populateDaily(csvData(FILE_NAME[2]), DATE_FORMAT_HU, station, Type.DAILY));
        log.info("saved {} daily measurments", dailyMeasurments.size());
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
        return "src/main/resources/" + name;
    }

    private List<Measurment> populateTenMin(String name, DateFormat format, Station station, Type type) {
        String line;
        List<Measurment> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(name, StandardCharsets.ISO_8859_1))) {
            br.readLine();
            int counter = 1;
            while ((line = br.readLine()) != null && counter < 100) {
                try {
                    String[] data = line.split(";", -1);
                    Measurment temp = Measurment.builder().date(format.parse(data[0])).type(type).station(station)
                            .airData(airDataRepository.save(AirData.builder().airHumidity((Double) doubleFormatter(data[1]))
                                    .airPressure((Double) doubleFormatter(data[2]))
                                    .airTemperature((Double) doubleFormatter(data[14])).build()))
                            .miscData(miscDataRepository.save(MiscData.builder()
                                    .irradiation((Double) doubleFormatter(data[6]))
                                    .freeze((Double) doubleFormatter(data[7])).rain((Double) doubleFormatter(data[8]))
                                    .leafMoisture((Double) doubleFormatter(data[12]))
                                    .lightUnit((Double) doubleFormatter(data[18]))
                                    .precipitationCounter((Double) doubleFormatter(data[20])).build()))
                            .soilData(soilDataRepository.save(SoilData.builder().soilTemperature0cm((Double) doubleFormatter(data[13]))
                                    .soilMoisture30cm((Double) doubleFormatter(data[16]))
                                    .soilMoisture60cm((Double) doubleFormatter(data[17]))
                                    .soilMoisture90cm((Double) doubleFormatter(data[11]))
                                    .soilMoisture120cm((Double) doubleFormatter(data[19])).build()))
                            .batteryData(batteryDataRepository.save(BatteryData.builder()
                                    .solarCellChargingVoltage((Double) doubleFormatter(data[4]))
                                    .externalBatteryVoltage((Double) doubleFormatter(data[5]))
                                    .internalBatteryVoltage((Double) doubleFormatter(data[15])).build()))
                            .windData(windDataRepository.save(WindData.builder().windGust((Double) doubleFormatter(data[10]))
                                    .windDirection((Double) doubleFormatter(data[9])).windSpeed((Double) doubleFormatter(data[3])).build())).build();
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

    private List<Measurment> populateHourly(String name, DateFormat format, Station station, Type type) {
        String line;
        List<Measurment> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(name, StandardCharsets.ISO_8859_1))) {
            br.readLine();
            int counter = 1;
            while ((line = br.readLine()) != null && counter < 100) {
                try {
                    String[] data = line.split(";", -1);
                    Measurment temp = Measurment.builder().date(format.parse(data[0])).type(type).station(station)
                            .airData(airDataRepository.save(AirData.builder().airHumidity((Double) doubleFormatter(data[1]))
                                    .airPressure((Double) doubleFormatter(data[3]))
                                    .airTemperature((Double) doubleFormatter(data[4])).build()))
                            .miscData(miscDataRepository.save(MiscData.builder()
                                    .irradiation((Double) doubleFormatter(data[13]))
                                    .freeze((Double) doubleFormatter(data[18])).rain((Double) doubleFormatter(data[7]))
                                    .leafMoisture((Double) doubleFormatter(data[12]))
                                    .lightUnit((Double) doubleFormatter(data[16]))
                                    .precipitationCounter((Double) doubleFormatter(data[11])).build()))
                            .soilData(soilDataRepository.save(SoilData.builder().soilTemperature0cm((Double) doubleFormatter(data[8]))
                                    .soilMoisture30cm((Double) doubleFormatter(data[20]))
                                    .soilMoisture60cm((Double) doubleFormatter(data[2]))
                                    .soilMoisture90cm((Double) doubleFormatter(data[15]))
                                    .soilMoisture120cm((Double) doubleFormatter(data[17])).build()))
                            .batteryData(batteryDataRepository.save(BatteryData.builder()
                                    .solarCellChargingVoltage((Double) doubleFormatter(data[5]))
                                    .externalBatteryVoltage((Double) doubleFormatter(data[6]))
                                    .internalBatteryVoltage((Double) doubleFormatter(data[10])).build()))
                            .windData(windDataRepository.save(WindData.builder().windGust((Double) doubleFormatter(data[14]))
                                    .windDirection((Double) doubleFormatter(data[9])).windSpeed((Double) doubleFormatter(data[19])).build())).build();
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

    private List<Measurment> populateDaily(String name, DateFormat format, Station station, Type type) {
        String line;
        List<Measurment> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(name, StandardCharsets.ISO_8859_1))) {
            br.readLine();
            int counter = 1;
            while ((line = br.readLine()) != null && counter < 100) {
                try {
                    String[] data = line.split(";", -1);
                    Measurment temp = Measurment.builder().date(format.parse(data[0])).type(type).station(station)
                            .airData(airDataRepository.save(AirData.builder().airHumidity((Double) doubleFormatter(data[13]))
                                    .airPressure((Double) doubleFormatter(data[3]))
                                    .airTemperature((Double) doubleFormatter(data[1])).build()))
                            .miscData(miscDataRepository.save(MiscData.builder()
                                    .irradiation((Double) doubleFormatter(data[16]))
                                    .freeze((Double) doubleFormatter(data[11])).rain((Double) doubleFormatter(data[6]))
                                    .leafMoisture((Double) doubleFormatter(data[4]))
                                    .lightUnit((Double) doubleFormatter(data[15]))
                                    .precipitationCounter((Double) doubleFormatter(data[20])).build()))
                            .soilData(soilDataRepository.save(SoilData.builder().soilTemperature0cm((Double) doubleFormatter(data[18]))
                                    .soilMoisture30cm((Double) doubleFormatter(data[9]))
                                    .soilMoisture60cm((Double) doubleFormatter(data[19]))
                                    .soilMoisture90cm((Double) doubleFormatter(data[2]))
                                    .soilMoisture120cm((Double) doubleFormatter(data[14])).build()))
                            .batteryData(batteryDataRepository.save(BatteryData.builder()
                                    .solarCellChargingVoltage((Double) doubleFormatter(data[17]))
                                    .externalBatteryVoltage((Double) doubleFormatter(data[5]))
                                    .internalBatteryVoltage((Double) doubleFormatter(data[10])).build()))
                            .windData(windDataRepository.save(WindData.builder().windGust((Double) doubleFormatter(data[7]))
                                    .windDirection((Double) doubleFormatter(data[8])).windSpeed((Double) doubleFormatter(data[12])).build())).build();
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