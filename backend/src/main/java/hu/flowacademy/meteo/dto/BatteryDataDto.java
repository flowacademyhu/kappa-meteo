package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.BatteryData;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BatteryDataDto {

    private Date date;
    private Double solarCellChargingVoltage;
    private Double externalBatteryVoltage;
    private Double internalBatteryVoltage;

    public static BatteryDataDto toDto(BatteryData batteryData) {
        BatteryDataDto batteryDataDto = new BatteryDataDto();
        batteryDataDto.setSolarCellChargingVoltage(batteryData.getSolarCellChargingVoltage());
        batteryDataDto.setExternalBatteryVoltage(batteryData.getExternalBatteryVoltage());
        batteryDataDto.setInternalBatteryVoltage(batteryData.getInternalBatteryVoltage());
        return batteryDataDto;
    }
}
