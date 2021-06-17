package hu.flowacademy.meteo.model;

import javax.persistence.*;

@Entity
public class HourlyData extends BaseData {

    @ManyToOne
    @JoinColumn
    private Station station;
}
