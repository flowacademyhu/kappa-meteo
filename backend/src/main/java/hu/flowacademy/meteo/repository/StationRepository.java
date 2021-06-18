package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StationRepository extends JpaRepository<Station, Long> {

    Optional<Station> findFirstByName(String name);

}
