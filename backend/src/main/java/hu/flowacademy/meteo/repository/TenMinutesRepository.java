package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.TenMinutes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TenMinutesRepository extends JpaRepository<TenMinutes, Integer> {
}
