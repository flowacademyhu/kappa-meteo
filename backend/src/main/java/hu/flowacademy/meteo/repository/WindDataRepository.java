package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.WindData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WindDataRepository extends JpaRepository<WindData, Long> {
}
