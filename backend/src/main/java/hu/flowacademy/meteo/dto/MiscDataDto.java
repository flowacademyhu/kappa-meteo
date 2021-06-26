package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.MiscData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class MiscDataDto {

    private Double irradiation;
    private Double freeze;
    private Double rain;
    private Double leafMoisture;
    private Double lightUnit;
    private Double precipitationCounter;

    public static MiscDataDto toDto(MiscData miscData) {
        MiscDataDto miscDataDto = new MiscDataDto();
        miscDataDto.setIrradiation(miscData.getIrradiation());
        miscDataDto.setFreeze(miscData.getFreeze());
        miscDataDto.setRain(miscData.getRain());
        miscDataDto.setLightUnit(miscData.getLightUnit());
        miscDataDto.setPrecipitationCounter(miscData.getPrecipitationCounter());
        return miscDataDto;
    }
}
