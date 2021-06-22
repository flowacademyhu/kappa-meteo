package hu.flowacademy.meteo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import hu.flowacademy.meteo.model.*;
import hu.flowacademy.meteo.model.enumPackage.Type;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MeasurmentDto {

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date date;
    private Type type;

    private AirData airData;
    private MiscData miscData;
    private SoilData soilData;
    private BatteryData batteryData;
    private WindData windData;

    public static MeasurmentDto toDto(Measurment measurment) {
        MeasurmentDto entity = new MeasurmentDto();
        entity.setDate(measurment.getDate());
        entity.setType(measurment.getType());
        entity.setAirData(measurment.getAirData());
        entity.setMiscData(measurment.getMiscData());
        entity.setSoilData(measurment.getSoilData());
        entity.setBatteryData(measurment.getBatteryData());
        entity.setWindData(measurment.getWindData());
        return entity;
    }
}
