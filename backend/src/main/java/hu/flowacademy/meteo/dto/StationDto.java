package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.Station;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StationDto {

    private Long id;
    private String name;
    private Double longitude;
    private Double latitude;
    private int intensity;

    public static StationDto toDto(Station station) {
        StationDto stationDto = new StationDto();
        stationDto.setId(station.getId());
        stationDto.setName(station.getName());
        stationDto.setLongitude(station.getLongitude());
        stationDto.setLatitude(station.getLatitude());
        stationDto.setIntensity((int)Math.floor(Math.random()*98)+1);
        return stationDto;
    }
}
