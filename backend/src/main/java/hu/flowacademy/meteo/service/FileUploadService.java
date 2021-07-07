package hu.flowacademy.meteo.service;

import hu.flowacademy.meteo.Exception.ValidationException;
import hu.flowacademy.meteo.model.*;
import hu.flowacademy.meteo.model.enumPackage.Type;
import hu.flowacademy.meteo.repository.MeasurementRepository;
import hu.flowacademy.meteo.repository.StationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
@Transactional
@Service
public class FileUploadService {

    private static final String DATE_FORMAT_HU_DASH = "yyyy-MM-dd HH:mm";
    private static final String DATA_TYPE_DAILY = "napi";
    private static final String DATA_TYPE_HOURLY = "orai";

    private final StationRepository stationRepository;
    private final MeasurementRepository measurementRepository;

    @Autowired
    public FileUploadService(StationRepository stationRepository, MeasurementRepository measurementRepository) {
        this.stationRepository = stationRepository;
        this.measurementRepository = measurementRepository;
    }

    public void fileUpload(MultipartFile file, String dataType, String stationName) throws IOException {
        try (InputStreamReader fileStreamReader = new InputStreamReader(file.getInputStream())) {
            Optional<Station> station = stationRepository.findFirstByName(stationName);
            if (station.isPresent()) {
                log.debug("Repsository size before upload: {}", measurementRepository.count());
                executeMeasurementSave(station.get(), fileStreamReader, getType(dataType));
                log.debug("Repsository size after upload: {}", measurementRepository.count());
            }
        } catch (IOException e) {
            log.error("Error while reading file: {}", file.getOriginalFilename(), e);
            throw e;
        }
    }

    public Type getType(String dataType) {
        return (DATA_TYPE_DAILY.equals(dataType) ? Type.DAILY : DATA_TYPE_HOURLY.equals(dataType) ? Type.HOURLY : Type.TEN_MIN);
    }

    public Object formatDoubleData(String str) {
        if (str.equals("") || str.equals("-9999,00000")) {
            return null;
        }
        return Double.parseDouble(str.replace(",", "."));
    }

    public String dataGetter(String[] data, Map<String, Integer> headerKeys, String header) {
        return headerKeys.containsKey(header) ? data[headerKeys.get(header)] : "";
    }

    public void executeMeasurementSave(Station station, Reader reader, Type type) {
        List<Measurement> measurements = measurementRepository.saveAll(populateDataBase(reader, station, type));
        log.info("saved {} {} measurments at station: {} with id: {}", measurements.size(), type, station.getName(), station.getId());
        if (measurements.size() == 0) {
            throw new ValidationException("File upload failed!");
        }
    }

    public Map<String, Integer> getKeys(String firstLine) {
        String[] keys = firstLine.split(";\\s*", -1);
        Map<String, Integer> dataMap = new HashMap<>();
        for (int i = 0; i < keys.length; i++) {
            dataMap.put(keys[i], i);
        }
        return dataMap;
    }

    public List<Measurement> populateDataBase(Reader reader, Station station, Type type) {
        String line;
        List<Measurement> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(reader)) {
            Map<String, Integer> dataMap = getKeys(br.readLine());
            log.debug("Found {} keys!!!", dataMap.size());
            if (dataMap.size() < 2) {
                throw new ValidationException("Error while reading file");
            }
            int counter = 1;
            while ((line = br.readLine()) != null) {
                try {
                    String[] data = line.split(";\\s*", -1);
                    Integer dateIndex = dataMap.get("DATE");
                    if (dateIndex != null && StringUtils.hasText(data[dateIndex])) {
                        String dateData = data != null ? data[dateIndex] : "";
                        Measurement temp = Measurement.builder().date(new SimpleDateFormat(DATE_FORMAT_HU_DASH).parse(dateData)).type(type).station(station)
                                .airData(AirData.builder()
                                        .airHumidity((Double) formatDoubleData(dataGetter(data, dataMap, "Levegő-páratartalom")))
                                        .airPressure((Double) formatDoubleData(dataGetter(data, dataMap, "Légnyomás")))
                                        .airTemperature((Double) formatDoubleData(dataGetter(data, dataMap, "Levegő-hőmérséklet"))).build())
                                .miscData(MiscData.builder()
                                        .irradiation((Double) formatDoubleData(dataGetter(data, dataMap, "Besugárzás")))
                                        .freeze((Double) formatDoubleData(dataGetter(data, dataMap, "Fagy")))
                                        .rain((Double) formatDoubleData(dataGetter(data, dataMap, "Csapadék")))
                                        .leafMoisture((Double) formatDoubleData(dataGetter(data, dataMap, "Levélnedvesség")))
                                        .lightUnit((Double) formatDoubleData(dataGetter(data, dataMap, "Fény egység")))
                                        .precipitationCounter((Double) formatDoubleData(dataGetter(data, dataMap, "Csapadék Számláló"))).build())
                                .soilData(SoilData.builder()
                                        .soilTemperature0cm((Double) formatDoubleData(dataGetter(data, dataMap, "Talajhőmérséklet 0 cm")))
                                        .soilMoisture30cm((Double) formatDoubleData(dataGetter(data, dataMap, "Talajnedvesség 30 cm")))
                                        .soilMoisture60cm((Double) formatDoubleData(dataGetter(data, dataMap, "Talajnedvesség 60 cm")))
                                        .soilMoisture90cm((Double) formatDoubleData(dataGetter(data, dataMap, "Talajnedvesség 90 cm")))
                                        .soilMoisture120cm((Double) formatDoubleData(dataGetter(data, dataMap, "Talajnedvesség 120 cm"))).build())
                                .batteryData(BatteryData.builder()
                                        .solarCellChargingVoltage((Double) formatDoubleData(dataGetter(data, dataMap, "Napelem töltőfeszültség")))
                                        .externalBatteryVoltage((Double) formatDoubleData(dataGetter(data, dataMap, "Külső akkufeszültség")))
                                        .internalBatteryVoltage((Double) formatDoubleData(dataGetter(data, dataMap, "Belső akkufeszültség"))).build())
                                .windData(WindData.builder()
                                        .windGust((Double) formatDoubleData(dataGetter(data, dataMap, "Széllökés")))
                                        .windDirection((Double) formatDoubleData(dataGetter(data, dataMap, "Szélirány")))
                                        .windSpeed((Double) formatDoubleData(dataGetter(data, dataMap, "Szélsebesség"))).build()).build();
                        list.add(temp);
                        counter++;
                    }
                } catch (NumberFormatException | ParseException e) {
                    log.error("Error while reading at the line {}: {}: {}", counter, br.readLine(), e.getMessage(), e);
                }
            }
        } catch (IOException e) {
            log.error("Error while opening reader: {}", e.getMessage());
        }
        return list;
    }
}