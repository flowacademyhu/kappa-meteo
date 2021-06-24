package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.model.MeasurmentId;
import hu.flowacademy.meteo.model.enumPackage.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeasurmentRepository extends JpaRepository<Measurment, MeasurmentId> {
    Measurment findFirstByStationIdOrderByDateDesc(Long id);

    //Measurment find(Long id);

    List<Measurment> findAllByTypeAndStationId(Type type, Long id);
}
