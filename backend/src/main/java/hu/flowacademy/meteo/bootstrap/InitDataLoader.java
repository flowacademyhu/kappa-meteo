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
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
@Component
@RequiredArgsConstructor
public class InitDataLoader implements CommandLineRunner {

    private final StationRepository stationRepository;
    private final MeasurementRepository measurementRepository;

    private static final String DATE_FORMAT_HU = "yyyy.MM.dd HH:mm";
    private static final String DATE_FORMAT_HU_SPACED = "yyyy. MM. dd. HH:mm";
    private static final String DATE_FORMAT_HU_DASH = "yyyy-MM-dd HH:mm";
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
            if (measurementRepository.count() == 0) {
                executeTenMinuteMeasurmentSave(homeStation.orElseGet(null));
                executeHourlyMeasurmentSave(homeStation.orElseGet(null));
                executeDailyMeasurmentSave(homeStation.orElseGet(null));
            }
        } else {
            log.warn("No station '{}' found for file import", HOME_STATION_NAME);
        }
    }

    private void executeTenMinuteMeasurmentSave(Station station) {
        List<Measurement> tenminMeasurements = measurementRepository.saveAll(populateDataBase(csvData(FILE_NAME[0]), DATE_FORMAT_HU, station, Type.TEN_MIN));
        log.info("saved {} ten minute measurments", tenminMeasurements.size());
    }

    private void executeHourlyMeasurmentSave(Station station) {
        List<Measurement> hourlyMeasurements = measurementRepository.saveAll(populateDataBase(csvData(FILE_NAME[1]), DATE_FORMAT_HU_SPACED, station, Type.HOURLY));
        log.info("saved {} hourly measurments", hourlyMeasurements.size());
    }

    private void executeDailyMeasurmentSave(Station station) {
        List<Measurement> dailyMeasurements = measurementRepository.saveAll(populateDataBase(csvData(FILE_NAME[2]), DATE_FORMAT_HU, station, Type.DAILY));
        log.info("saved {} daily measurments", dailyMeasurements.size());
    }

    private void executeStationSave() {
        List<Station> stations = stationRepository.saveAll(populateStations(csvData(FILE_NAME[3])));
        log.info("saved {} station", stations.size());
    }

    public Object doubleFormatter(String str) {
        if (str.equals("") || str.equals("-9999,00000")) {
            return null;
        }
        return Double.parseDouble(str.replace(",", "."));
    }

    public String dataGetter(String[] data, Map<String, Integer> dataMap, String dataType) {
        return dataMap.containsKey(dataType) ? data[dataMap.get(dataType)] : "";
    }

    private String csvData(String name) {
        return "src/main/resources/" + name;
    }

    private List<Measurement> populateDataBase(String name, String format, Station station, Type type) {
        String line;
        List<Measurement> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(name, StandardCharsets.UTF_8))) {
            String[] keys = br.readLine().split(";\\s*", -1);
            Map<String, Integer> dataMap = new HashMap<>();
            for (int i = 0; i < keys.length; i++) {
                dataMap.put(keys[i], i);
            }
            int counter = 1;
            while ((line = br.readLine()) != null) {
                try {
                    String[] data = line.split(";\\s*", -1);
                    Measurement temp = Measurement.builder().date(new SimpleDateFormat(format).parse(data[dataMap.get("DATE")])).type(type).station(station)
                            .airData(AirData.builder()
                                    .airHumidity((Double) doubleFormatter(dataGetter(data, dataMap, "Levegő-páratartalom")))
                                    .airPressure((Double) doubleFormatter(dataGetter(data, dataMap, "Légnyomás")))
                                    .airTemperature((Double) doubleFormatter(dataGetter(data, dataMap, "Levegő-hőmérséklet"))).build())
                            .miscData(MiscData.builder()
                                    .irradiation((Double) doubleFormatter(dataGetter(data, dataMap, "Besugárzás")))
                                    .freeze((Double) doubleFormatter(dataGetter(data, dataMap, "Fagy")))
                                    .rain((Double) doubleFormatter(dataGetter(data, dataMap, "Csapadék")))
                                    .leafMoisture((Double) doubleFormatter(dataGetter(data, dataMap, "Levélnedvesség")))
                                    .lightUnit((Double) doubleFormatter(dataGetter(data, dataMap, "Fény egység")))
                                    .precipitationCounter((Double) doubleFormatter(dataGetter(data, dataMap, "Csapadék Számláló"))).build())
                            .soilData(SoilData.builder()
                                    .soilTemperature0cm((Double) doubleFormatter(dataGetter(data, dataMap, "Talajhőmérséklet 0 cm")))
                                    .soilMoisture30cm((Double) doubleFormatter(dataGetter(data, dataMap, "Talajnedvesség 30 cm")))
                                    .soilMoisture60cm((Double) doubleFormatter(dataGetter(data, dataMap, "Talajnedvesség 60 cm")))
                                    .soilMoisture90cm((Double) doubleFormatter(dataGetter(data, dataMap, "Talajnedvesség 90 cm")))
                                    .soilMoisture120cm((Double) doubleFormatter(dataGetter(data, dataMap, "Talajnedvesség 120 cm"))).build())
                            .batteryData(BatteryData.builder()
                                    .solarCellChargingVoltage((Double) doubleFormatter(dataGetter(data, dataMap, "Napelem töltőfeszültség")))
                                    .externalBatteryVoltage((Double) doubleFormatter(dataGetter(data, dataMap, "Külső akkufeszültség")))
                                    .internalBatteryVoltage((Double) doubleFormatter(dataGetter(data, dataMap, "Belső akkufeszültség"))).build())
                            .windData(WindData.builder()
                                    .windGust((Double) doubleFormatter(dataGetter(data, dataMap, "Széllökés")))
                                    .windDirection((Double) doubleFormatter(dataGetter(data, dataMap, "Szélirány")))
                                    .windSpeed((Double) doubleFormatter(dataGetter(data, dataMap, "Szélsebesség"))).build()).build();
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