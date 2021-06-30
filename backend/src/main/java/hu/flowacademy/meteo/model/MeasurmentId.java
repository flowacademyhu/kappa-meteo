package hu.flowacademy.meteo.model;

import hu.flowacademy.meteo.model.enumPackage.Type;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@EqualsAndHashCode
@NoArgsConstructor
public class MeasurmentId implements Serializable {

    private Long station;
    private Date date;
    private Type type;
}
