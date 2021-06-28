package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.AirData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AirDataDto {

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
