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
public class SoilData {

    @JsonIgnore
    @Id
    @GeneratedValue
    private Long id;
    private Double soilMoisture30cm;
    private Double soilMoisture60cm;
    private Double soilMoisture90cm;
    private Double soilMoisture120cm;
    private Double soilTemperature0cm;
}
