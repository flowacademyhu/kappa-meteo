package hu.flowacademy.meteo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import hu.flowacademy.meteo.model.enumPackage.Type;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@EqualsAndHashCode
@NoArgsConstructor
public class MeasurmentId implements Serializable {

    private Long station;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date date;
    private Type type;
}
