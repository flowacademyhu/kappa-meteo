package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.DailyData;
import hu.flowacademy.meteo.model.HourlyData;
import hu.flowacademy.meteo.model.Station;
import hu.flowacademy.meteo.model.TenMinuteData;
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

    private Station station;
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

    public TenMinuteData toTenEntity() {
        TenMinuteData entity = new TenMinuteData();
        entity.setDate(this.date);
        entity.setAirHumidity(this.airHumidity);
        entity.setAirPressure(this.airPressure);
        entity.setWindSpeed(this.windSpeed);
        entity.setSolarCellChargingVoltage(this.solarCellChargingVoltage);
        entity.setExternalBatteryVoltage(this.externalBatteryVoltage);
        entity.setIrradiation(this.irradiation);
        entity.setFreeze(this.freeze);
        entity.setRain(this.rain);
        entity.setWindDirection(this.windDirection);
        entity.setWindGust(this.windGust);
        entity.setSoilMoisture90cm(this.soilMoisture90cm);
        entity.setLeafMoisture(this.leafMoisture);
        entity.setSoilTemperature0cm(this.soilTemperature0cm);
        entity.setAirTemperature(this.airTemperature);
        entity.setInternalBatteryVoltage(this.internalBatteryVoltage);
        entity.setSoilMoisture30cm(this.soilMoisture30cm);
        entity.setSoilMoisture60cm(this.soilMoisture60cm);
        entity.setLightUnit(this.lightUnit);
        entity.setSoilMoisture120cm(this.soilMoisture120cm);
        entity.setPrecipitationCounter(this.precipitationCounter);
        entity.setStation(this.station);
        return entity;
    }

    public HourlyData toHourlyEntity() {
        HourlyData entity = new HourlyData();
        entity.setDate(this.date);
        entity.setAirHumidity(this.airHumidity);
        entity.setAirPressure(this.airPressure);
        entity.setWindSpeed(this.windSpeed);
        entity.setSolarCellChargingVoltage(this.solarCellChargingVoltage);
        entity.setExternalBatteryVoltage(this.externalBatteryVoltage);
        entity.setIrradiation(this.irradiation);
        entity.setFreeze(this.freeze);
        entity.setRain(this.rain);
        entity.setWindDirection(this.windDirection);
        entity.setWindGust(this.windGust);
        entity.setSoilMoisture90cm(this.soilMoisture90cm);
        entity.setLeafMoisture(this.leafMoisture);
        entity.setSoilTemperature0cm(this.soilTemperature0cm);
        entity.setAirTemperature(this.airTemperature);
        entity.setInternalBatteryVoltage(this.internalBatteryVoltage);
        entity.setSoilMoisture30cm(this.soilMoisture30cm);
        entity.setSoilMoisture60cm(this.soilMoisture60cm);
        entity.setLightUnit(this.lightUnit);
        entity.setSoilMoisture120cm(this.soilMoisture120cm);
        entity.setPrecipitationCounter(this.precipitationCounter);
        entity.setStation(this.station);
        return entity;
    }

    public DailyData toDailyEntity() {
        DailyData entity = new DailyData();
        entity.setDate(this.date);
        entity.setAirHumidity(this.airHumidity);
        entity.setAirPressure(this.airPressure);
        entity.setWindSpeed(this.windSpeed);
        entity.setSolarCellChargingVoltage(this.solarCellChargingVoltage);
        entity.setExternalBatteryVoltage(this.externalBatteryVoltage);
        entity.setIrradiation(this.irradiation);
        entity.setFreeze(this.freeze);
        entity.setRain(this.rain);
        entity.setWindDirection(this.windDirection);
        entity.setWindGust(this.windGust);
        entity.setSoilMoisture90cm(this.soilMoisture90cm);
        entity.setLeafMoisture(this.leafMoisture);
        entity.setSoilTemperature0cm(this.soilTemperature0cm);
        entity.setAirTemperature(this.airTemperature);
        entity.setInternalBatteryVoltage(this.internalBatteryVoltage);
        entity.setSoilMoisture30cm(this.soilMoisture30cm);
        entity.setSoilMoisture60cm(this.soilMoisture60cm);
        entity.setLightUnit(this.lightUnit);
        entity.setSoilMoisture120cm(this.soilMoisture120cm);
        entity.setPrecipitationCounter(this.precipitationCounter);
        entity.setStation(this.station);
        return entity;
    }
}
