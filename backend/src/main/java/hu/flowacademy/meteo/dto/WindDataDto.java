package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.WindData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WindDataDto {

    private Double windSpeed;
    private Double windDirection;
    private Double windGust;

    public static WindDataDto toDto(WindData windData) {
        WindDataDto windDataDto = new WindDataDto();
        windDataDto.setWindSpeed(windData.getWindSpeed());
        windDataDto.setWindDirection(windData.getWindDirection());
        windDataDto.setWindGust(windData.getWindGust());
        return windDataDto;
    }
}
