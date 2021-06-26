package hu.flowacademy.meteo.repository;

import hu.flowacademy.meteo.model.AirData;
import hu.flowacademy.meteo.model.enumPackage.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirDataRepository extends JpaRepository<AirData, Long> {



}
