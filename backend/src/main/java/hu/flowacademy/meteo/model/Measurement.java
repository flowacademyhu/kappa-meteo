package hu.flowacademy.meteo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import hu.flowacademy.meteo.model.enumPackage.Type;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@IdClass(MeasurementId.class)
public class Measurement {

    @Id
    private Date date;

    @Id
    private Type type;

    @JsonIgnore
    @ManyToOne
    @JoinColumn
    @Id
    private Station station;

    @OneToOne(cascade = {CascadeType.ALL})
    private AirData airData;

    @OneToOne(cascade = {CascadeType.ALL})
    private MiscData miscData;

    @OneToOne(cascade = {CascadeType.ALL})
    private SoilData soilData;

    @OneToOne(cascade = {CascadeType.ALL})
    private BatteryData batteryData;

    @OneToOne(cascade = {CascadeType.ALL})
    private WindData windData;
}
