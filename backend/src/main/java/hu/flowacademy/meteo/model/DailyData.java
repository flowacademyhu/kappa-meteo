package hu.flowacademy.meteo.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class DailyData extends BaseData {

    @ManyToOne
    @JoinColumn
    private Station station;
}
