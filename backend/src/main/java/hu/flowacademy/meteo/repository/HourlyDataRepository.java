package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.HourlyData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HourlyDataRepository extends JpaRepository<HourlyData, Integer> {

    HourlyData findByStationId(Integer id);
}
