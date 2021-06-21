package hu.flowacademy.meteo.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class HourlyData extends BaseData {

    @ManyToOne
    @JoinColumn
    private Station station;
}
