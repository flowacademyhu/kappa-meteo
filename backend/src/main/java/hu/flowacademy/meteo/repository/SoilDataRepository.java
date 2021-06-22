package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.SoilData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SoilDataRepository extends JpaRepository<SoilData, Long> {
}
