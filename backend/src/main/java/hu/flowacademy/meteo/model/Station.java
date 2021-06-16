package hu.flowacademy.meteo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Station {

    @Id
    @GeneratedValue
    private Long id;
    private String stationLocation;

    @OneToOne(mappedBy = "station")
    private TenMinuteData tenMinuteData;

    @OneToOne(mappedBy = "station")
    private HourlyData hourlyData;

    @OneToOne(mappedBy = "station")
    private DailyData dailyData;
}
