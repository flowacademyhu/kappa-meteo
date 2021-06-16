package hu.flowacademy.meteo.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Station {

    @Id
    @GeneratedValue
    private int stationId;
    private String stationLocation;

    @OneToOne(mappedBy = "station")
    private TenMinuteData tenMinuteData;

    @OneToOne(mappedBy = "station")
    private HourlyData hourlyData;

    @OneToOne(mappedBy = "station")
    private DailyData dailyData;

}
