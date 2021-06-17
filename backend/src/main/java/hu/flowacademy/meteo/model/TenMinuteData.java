package hu.flowacademy.meteo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class TenMinuteData extends BaseData {

    @ManyToOne
    @JoinColumn
    private Station station;

    @Id
    @GeneratedValue
    @JsonIgnore
    private Long id;
}
