package hu.flowacademy.meteo.model;

import javax.persistence.*;

@Entity
public class TenMinuteData extends BaseData {

    @ManyToOne
    @JoinColumn
    private Station station;
}
