package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.Measurment;
import hu.flowacademy.meteo.model.MeasurmentId;
import hu.flowacademy.meteo.model.enumPackage.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface MeasurmentRepository extends JpaRepository<Measurment, MeasurmentId> {

    Measurment findFirstByStationIdOrderByDateDesc(Long stationId);

    @Query(value = "SELECT m from Measurment m WHERE m.id.station = :stationId AND m.type = :type AND m.date BETWEEN :startDate AND :endDate")
    public List<Measurment> historicalFilterParams(@Param("startDate") Date startDate, @Param("endDate") Date endDate, @Param("type") Type type, @Param("stationId") Long stationId);
}
