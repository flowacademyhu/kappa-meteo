package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.AirData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AirDataRepository extends JpaRepository<AirData, Long> {

    Optional<AirData> findById(Long id);
}
