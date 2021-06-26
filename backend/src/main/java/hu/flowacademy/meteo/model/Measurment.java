package hu.flowacademy.meteo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import hu.flowacademy.meteo.model.enumPackage.Type;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Locale;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@IdClass(MeasurmentId.class)
public class Measurment {

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Id
    private Date date;

    @Id
    private Type type;

    @JsonIgnore
    @ManyToOne
    @JoinColumn
    @Id
    private Station station;

    @OneToOne
    private AirData airData;

    @OneToOne
    private MiscData miscData;

    @OneToOne
    private SoilData soilData;

    @OneToOne
    private BatteryData batteryData;

    @OneToOne
    private WindData windData;
}
