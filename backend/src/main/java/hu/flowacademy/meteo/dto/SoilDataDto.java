package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.SoilData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SoilDataDto {

    private Date date;
    private Double soilMoisture30cm;
    private Double soilMoisture60cm;
    private Double soilMoisture90cm;
    private Double soilMoisture120cm;
    private Double soilTemperature0cm;

    public static SoilDataDto toDto(SoilData soilData) {
        SoilDataDto soilDataDto = new SoilDataDto();
        soilDataDto.setSoilMoisture30cm(soilData.getSoilMoisture30cm());
        soilDataDto.setSoilMoisture60cm(soilData.getSoilMoisture60cm());
        soilDataDto.setSoilMoisture90cm(soilData.getSoilMoisture90cm());
        soilDataDto.setSoilMoisture120cm(soilData.getSoilMoisture120cm());
        soilDataDto.setSoilTemperature0cm(soilData.getSoilTemperature0cm());
        return soilDataDto;
    }
}
