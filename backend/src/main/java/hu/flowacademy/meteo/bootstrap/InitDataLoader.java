package hu.flowacademy.meteo.bootstrap;

import hu.flowacademy.meteo.model.TenMinutes;
import hu.flowacademy.meteo.repository.TenMinutesRepository;
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

    private final TenMinutesRepository tenMinutesRepository;

    @Transactional(propagation = Propagation.SUPPORTS)
    @Override
    public void run(String... args) throws Exception {
        List<TenMinutes> tenMinutes = executeTenMinutesSave();
    }

    @Transactional
    private List<TenMinutes> executeTenMinutesSave() {
        List<TenMinutes> tenMinutes = tenMinutesRepository.saveAll(populateTenMinutes());
        log.info("saved {} tenminutes", tenMinutes.size());
        return tenMinutes;
    }

    private List<TenMinutes> populateTenMinutes() {
        String line = "";
        List<TenMinutes> list = new ArrayList<>();
        try {
            BufferedReader br = new BufferedReader(new FileReader("src/main/resources/CSIHA_HQ_10perc.csv"));
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] data = line.split(";", -1);
                TenMinutes temp = TenMinutes.builder().date(data[0])
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
