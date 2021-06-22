package hu.flowacademy.meteo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class AirData {

    @JsonIgnore
    @Id
    @GeneratedValue
    private Long id;
    private Double airHumidity;
    private Double airPressure;
    private Double airTemperature;
}
