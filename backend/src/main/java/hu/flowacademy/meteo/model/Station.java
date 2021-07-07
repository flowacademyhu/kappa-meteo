package hu.flowacademy.meteo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder(toBuilder = true)
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
    private boolean hasData;
}
