package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.Station;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Random;

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
        stationDto.setIntensity(new Random().nextInt(100));
        return stationDto;
    }
}
