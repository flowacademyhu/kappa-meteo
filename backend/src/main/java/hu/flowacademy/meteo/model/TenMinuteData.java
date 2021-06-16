package hu.flowacademy.meteo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Date;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class TenMinuteData {
    @OneToOne
    @JoinColumn
    private Station station;

    @Id
    @GeneratedValue
    @JsonIgnore
    private int id;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Europe/Budapest")
    private Date date;
    private double airHumidity;
    private double airPressure;
    private double windSpeed;
    private double solarCellChargingVoltage;
    private double externalBatteryVoltage;
    private double irradiation;
    private int freeze;
    private double rain;
    private double windDirection;
    private double windGust;
    private double soilMoisture90cm;
    private int leafMoisture;
    private double soilTemperature0cm;
    private double airTemperature;
    private double internalBatteryVoltage;
    private double soilMoisture30cm;
    private double soilMoisture60cm;
    private double lightUnit;
    private double soilMoisture120cm;
    private double precipitationCounter;
}
