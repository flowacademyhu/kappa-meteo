package hu.flowacademy.meteo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Station {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Double longitude;
    private Double latitude;

    @OneToMany(mappedBy = "station")
    private List<TenMinuteData> tenMinuteData;

    @OneToMany(mappedBy = "station")
    private List<HourlyData> hourlyData;

    @OneToMany(mappedBy = "station")
    private List<DailyData> dailyData;
}
