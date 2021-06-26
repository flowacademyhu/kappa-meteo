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

    private AirDataDto airDataDto;
    private MiscDataDto miscDataDto;
    private SoilDataDto soilDataDto;
    private BatteryDataDto batteryDataDto;
    private WindDataDto windDataDto;
}
