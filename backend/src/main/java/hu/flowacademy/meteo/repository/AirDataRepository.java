package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.AirData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirDataRepository extends JpaRepository<AirData, Long> {
}
