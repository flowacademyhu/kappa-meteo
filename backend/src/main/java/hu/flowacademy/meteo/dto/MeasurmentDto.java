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

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+2")
    private Date date;
    private Type type;

    private AirData airData;
    private MiscData miscData;
    private SoilData soilData;
    private BatteryData batteryData;
    private WindData windData;

    public static MeasurmentDto toDto(Measurment measurment) {
        MeasurmentDto measurmentDto = new MeasurmentDto();
        measurmentDto.setDate(measurment.getDate());
        measurmentDto.setType(measurment.getType());
        measurmentDto.setAirData(measurment.getAirData());
        measurmentDto.setMiscData(measurment.getMiscData());
        measurmentDto.setSoilData(measurment.getSoilData());
        measurmentDto.setBatteryData(measurment.getBatteryData());
        measurmentDto.setWindData(measurment.getWindData());
        return measurmentDto;
    }
}
