package hu.flowacademy.meteo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class BaseData {

    @Id
    @GeneratedValue
    @JsonIgnore
    private Long id;

    private Date date;
    private Double airHumidity;
    private Double airPressure;
    private Double windSpeed;
    private Double solarCellChargingVoltage;
    private Double externalBatteryVoltage;
    private Double irradiation;
    private Double freeze;
    private Double rain;
    private Double windDirection;
    private Double windGust;
    private Double soilMoisture90cm;
    private Double leafMoisture;
    private Double soilTemperature0cm;
    private Double airTemperature;
    private Double internalBatteryVoltage;
    private Double soilMoisture30cm;
    private Double soilMoisture60cm;
    private Double lightUnit;
    private Double soilMoisture120cm;
    private Double precipitationCounter;
}
