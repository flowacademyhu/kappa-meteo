package hu.flowacademy.meteo;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class MeteoBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(MeteoBackendApplication.class, args);
    }
}




