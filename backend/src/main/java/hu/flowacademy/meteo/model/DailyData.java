package hu.flowacademy.meteo.model;

import javax.persistence.*;

@Entity
public class DailyData extends BaseData {

    @ManyToOne
    @JoinColumn
    private Station station;
}
