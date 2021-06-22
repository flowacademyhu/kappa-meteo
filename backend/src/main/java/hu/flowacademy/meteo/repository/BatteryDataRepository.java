package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.BatteryData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BatteryDataRepository extends JpaRepository<BatteryData, Long> {
}
