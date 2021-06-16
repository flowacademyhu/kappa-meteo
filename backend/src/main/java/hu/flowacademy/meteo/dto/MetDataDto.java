package hu.flowacademy.meteo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MetDataDto {

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy.MM.dd HH:mm", timezone = "UTC")
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
    private int precipitationCounter;
}
