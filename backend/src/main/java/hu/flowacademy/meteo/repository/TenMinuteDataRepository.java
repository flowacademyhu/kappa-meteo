package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.TenMinuteData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TenMinuteDataRepository extends JpaRepository<TenMinuteData, Integer> {
}