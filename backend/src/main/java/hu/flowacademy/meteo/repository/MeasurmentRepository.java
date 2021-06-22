package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.model.MeasurmentId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeasurmentRepository extends JpaRepository<Measurment, MeasurmentId> {
    Measurment findFirstByStationIdOrderByDateDesc(Long id);
}
