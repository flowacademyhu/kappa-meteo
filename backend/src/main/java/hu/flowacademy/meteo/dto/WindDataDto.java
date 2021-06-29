package hu.flowacademy.meteo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import hu.flowacademy.meteo.model.WindData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WindDataDto {

    @JsonFormat(pattern = "MM-dd", timezone = "GMT+2")
    private Date date;
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
