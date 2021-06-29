package hu.flowacademy.meteo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import hu.flowacademy.meteo.model.AirData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AirDataDto {

    @JsonFormat(pattern = "MM-dd", timezone = "GMT+2")
    private Date date;
    private Double airHumidity;
    private Double airPressure;
    private Double airTemperature;

    public static AirDataDto toDto(AirData airData) {
        AirDataDto airDataDto = new AirDataDto();
        airDataDto.setAirHumidity(airData.getAirHumidity());
        airDataDto.setAirPressure(airData.getAirPressure());
        airDataDto.setAirTemperature(airData.getAirTemperature());
        return airDataDto;
    }
}
