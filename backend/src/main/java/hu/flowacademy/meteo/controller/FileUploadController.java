package hu.flowacademy.meteo.controller;

import hu.flowacademy.meteo.Exception.ValidationException;
import hu.flowacademy.meteo.repository.StationRepository;
import hu.flowacademy.meteo.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequiredArgsConstructor
@Slf4j
public class FileUploadController {

    private final StationRepository stationRepository;
    private final FileUploadService fileUploadService;

    @PostMapping("upload")
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file, @RequestParam("type") String dataType) {
        validate(file);
        try {
            fileUploadService.fileUpload(file, dataType, getStationName(Objects.requireNonNull(file.getOriginalFilename())));
        } catch (Exception e) {
            log.error("Problem while uploading file {} : {} ", file.getOriginalFilename(), e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok("Sikeres fájl feltöltés.");
    }

    public void validate(MultipartFile file) {
        if (!Objects.requireNonNull(file.getOriginalFilename()).matches("^.*(csv)$")) {
            throw new ValidationException("Nem megfelelő a fájl tipusa!!!");
        }
        if (!Objects.requireNonNull(file.getOriginalFilename()).contains("napi")
                && !Objects.requireNonNull(file.getOriginalFilename()).contains("orai")
                && !Objects.requireNonNull(file.getOriginalFilename()).contains("10perc")) {
            throw new ValidationException("Nem megfelelő a fájl!!!");
        }
        if (stationRepository.findFirstByName(getStationName(file.getOriginalFilename())).isEmpty()) {
            throw new ValidationException("Nincs ilyen állomás!!!");
        }
    }

    public String getStationName(String fileName) {
        String[] temp = fileName.split("_");
        return temp[0] + '_' + temp[1];
    }
}