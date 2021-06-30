package hu.flowacademy.meteo.dto;

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

    private Date date;
    private Type type;

    private AirDataDto airDataDto;
    private MiscDataDto miscDataDto;
    private SoilDataDto soilDataDto;
    private BatteryDataDto batteryDataDto;
    private WindDataDto windDataDto;
}
