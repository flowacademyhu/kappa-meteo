package hu.flowacademy.meteo.dto;

import hu.flowacademy.meteo.model.enumPackage.Type;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FilterParamsDto {

    Long id;
    Type type;
    Date startDate;
    Date endDate;
}
