package hu.flowacademy.meteo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class HourlyData {

    @Id
    @GeneratedValue
    private int id;
    private String date;
    private String airHumidity;
    private String airPressure;
    private String windSpeed;
    private String solarCellChargingVoltage;
    private String externalBatteryVoltage;
    private String irradiation;
    private String freeze;
    private String rain;
    private String windDirection;
    private String windGust;
    private String soilMoisture90cm;
    private String leafMoisture;
    private String soilTemperature0cm;
    private String airTemperature;
    private String internalBatteryVoltage;
    private String soilMoisture30cm;
    private String soilMoisture60cm;
    private String lightUnit;
    private String soilMoisture120cm;
    private String precipitationCounter;
}