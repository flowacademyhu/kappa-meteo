package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.MiscData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MiscDataRepository extends JpaRepository<MiscData, Long> {
}
