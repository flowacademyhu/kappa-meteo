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
public class MiscData {

    @JsonIgnore
    @Id
    @GeneratedValue
    private Long id;
    private Double irradiation;
    private Double freeze;
    private Double rain;
    private Double leafMoisture;
    private Double lightUnit;
    private Double precipitationCounter;
}
