package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.Measurement;
import hu.flowacademy.meteo.model.MeasurementId;
import hu.flowacademy.meteo.model.enumPackage.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface MeasurementRepository extends JpaRepository<Measurement, MeasurementId> {

    Measurement findFirstByStationIdOrderByDateDesc(Long stationId);

    List<Measurement> findFirstByStationName(String stationName);

    @Query(value = "SELECT m from Measurement m WHERE m.id.station = :stationId AND m.type = :type AND m.date BETWEEN :startDate AND :endDate")
    public List<Measurement> findAllMeasurementsBy(@Param("startDate") Date startDate, @Param("endDate") Date endDate, @Param("type") Type type, @Param("stationId") Long stationId);
}
