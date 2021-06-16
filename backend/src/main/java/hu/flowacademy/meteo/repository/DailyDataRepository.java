package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.DailyData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DailyDataRepository extends JpaRepository<DailyData, Integer> {

    @Query("SELECT count(*) FROM DailyData")
    int countDailyData();

    DailyData findByStationId(Integer id);
}