package hu.flowacademy.meteo.bootstrap;

import hu.flowacademy.meteo.model.*;
import hu.flowacademy.meteo.repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import java.util.*;

@Slf4j
@Component
public class InitDataLoader implements CommandLineRunner {

    private final StationRepository stationRepository;

    @Autowired
    public InitDataLoader(StationRepository stationRepository) {
        this.stationRepository = stationRepository;
    }

    @Override
    public void run(String... args) {
        log.info("Starting init data loader");
        if (stationRepository.count() == 0) {
            executeStationSave();
        }
    }

    private void executeStationSave() {
        List<Station> stations = stationRepository.saveAll(populateStations(csvData("public_allomasok.csv")));
        log.info("saved {} station", stations.size());
    }

    private String csvData(String name) {
        return "/app/" + name;
    }

    public Object doubleFormatter(String str) {
        if (str.equals("") || str.equals("-9999,00000")) {
            return null;
        }
        return Double.parseDouble(str.replace(",", "."));
    }

    private List<Station> populateStations(String name) {
        String line;
        List<Station> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(name, StandardCharsets.UTF_8))) {
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
