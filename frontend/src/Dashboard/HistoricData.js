import React, { useState, useEffect } from 'react';
import MeasureCard from './MeasureCard.js';
import axios from 'axios';
import {
  NavLink,
  TitleText,
  CardData,
  GroupText,
  CardBorder,
  MiscGrid,
  WindGrid,
  SoilGrid,
  BatteryGrid,
  InfoStyle,
  StyleZoom,
} from './StyledElements.js';
import {
  RiCompassDiscoverFill,
  RiDashboard3Line,
  RiLeafLine,
  RiBattery2ChargeLine,
} from 'react-icons/ri';
import { IoMdRocket } from 'react-icons/io';
import { WiHumidity, WiThermometer } from 'react-icons/wi';
import { HiSun } from 'react-icons/hi';
import { TiWeatherShower, TiWeatherSnow } from 'react-icons/ti';
import { VscDashboard } from 'react-icons/vsc';
import { GiDrop, GiChaliceDrops, GiCarBattery } from 'react-icons/gi';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import Loader from './Loader.js';

export default function HistoricData() {
  const [weatherData, setWeatherData] = useState(null);
  const [station, setStation] = useState('');
  const [stationsWithData, setStationsWithData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/latest?stationId=${id}`);
        response.data && setWeatherData(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      if (station.length > 0) {
        try {
          const response = await axios.get(`/api/latest?stationId=${station}`);
          response.data && setWeatherData(response.data);
        } catch (err) {
          console.error(err);
        }
      }
    }
    fetchData();
  }, [station]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/hasdata`);
        response.data && setStationsWithData(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const dateFormat = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm');
  };

  const fixedTwoDigits = (data) => {
    return data !== null && data !== undefined ? data.toFixed(2) : null;
  };

  const miscData = (misc) => {
    return [
      {
        icon: TiWeatherSnow,
        titleText: 'Fagy',
        text: isFreeze(misc.miscDataDto.freeze),
        unit: '',
      },

      {
        icon: TiWeatherShower,
        titleText: 'Csapadék',
        text: misc.miscDataDto.rain,
        unit: 'mm',
      },
      {
        icon: HiSun,
        titleText: 'Besugárzás',
        text: misc.miscDataDto.irradiation,
        unit: 'W/m2',
      },

      {
        icon: HiSun,
        titleText: 'Fényegység',
        text: misc.miscDataDto.lightUnit,
        unit: 'cd',
      },

      {
        icon: GiChaliceDrops,
        titleText: 'Csapadék számláló',
        text: misc.miscDataDto.precipitationCounter,
        unit: 'mm',
      },
      {
        icon: RiLeafLine,
        titleText: 'Levélnedvesség',
        text: misc.miscDataDto.leafMoisture,
        unit: 'perc',
      },
    ];
  };

  const airData = (air) => {
    return [
      {
        icon: WiThermometer,
        titleText: 'Levegő hőmérséklet',
        text: Math.round(air.airDataDto.airTemperature),
        unit: <>&#8451;</>,
      },

      {
        icon: RiDashboard3Line,
        titleText: 'Légnyomás',
        text: air.airDataDto.airPressure,
        unit: 'kPa',
      },
      {
        icon: WiHumidity,
        titleText: 'Levegő páratartalom',
        text: air.airDataDto.airHumidity,
        unit: '%',
      },
    ];
  };

  const windData = (wind) => {
    return [
      {
        icon: RiCompassDiscoverFill,
        titleText: 'Szélirány',
        text: windDirection(wind.windDataDto.windDirection),
        unit: '',
      },

      {
        icon: IoMdRocket,
        titleText: 'Széllökés',
        text: wind.windDataDto.windGust,
        unit: 'km/h',
      },

      {
        icon: VscDashboard,
        titleText: 'Szélsebesség',
        text: wind.windDataDto.windSpeed,
        unit: 'km/h',
      },
    ];
  };

  const soilData = (soil) => {
    return [
      {
        icon: WiThermometer,
        titleText: 'Talaj hőmérséklet 0cm',
        text: fixedTwoDigits(soil.soilDataDto.soilTemperature0cm),
        unit: <>&#8451;</>,
      },

      {
        icon: GiDrop,
        titleText: 'Talaj nedvesség 30cm',
        text: fixedTwoDigits(soil.soilDataDto.soilTemperature30cm),

        unit: 'V/V %',
      },
      {
        icon: GiDrop,
        titleText: 'Talaj nedvesség 60cm',
        text: fixedTwoDigits(soil.soilDataDto.soilTemperature60cm),

        unit: 'V/V %',
      },

      {
        icon: GiDrop,
        titleText: 'Talaj nedvesség 90cm',
        text: fixedTwoDigits(soil.soilDataDto.soilTemperature90cm),
        unit: 'V/V %',
      },

      {
        icon: GiDrop,
        titleText: 'Talaj nedvesség 120cm',
        text: fixedTwoDigits(soil.soilDataDto.soilTemperature120cm),
        unit: 'V/V %',
      },
    ];
  };

  const batteryData = (battery) => {
    return [
      {
        icon: RiBattery2ChargeLine,
        titleText: 'Napelem töltő feszültség',
        text: fixedTwoDigits(battery.batteryDataDto.solarCellChargingVoltage),
        unit: 'V',
      },

      {
        icon: GiCarBattery,
        titleText: 'Külső akkufeszültség',
        text: fixedTwoDigits(battery.batteryDataDto.externalBatteryVoltage),
        unit: 'V',
      },

      {
        icon: GiCarBattery,
        titleText: 'Belső akkufeszültség',
        text: fixedTwoDigits(battery.batteryDataDto.internalBatteryVoltage),
        unit: 'V',
      },
    ];
  };

  const windDirection = (wind) => {
    if (wind !== null && wind !== undefined) {
      if (wind < 22.5 || wind > 337.5) {
        return 'Északi';
      } else if (wind < 67.5) {
        return 'Észak-Keleti';
      } else if (wind < 112.5) {
        return 'Keleti';
      } else if (wind < 157.5) {
        return 'Dél-Keleti';
      } else if (wind < 202.5) {
        return 'Déli';
      } else if (wind < 247.5) {
        return 'Dél-Nyugati';
      } else if (wind < 292.5) {
        return 'Nyugati';
      } else {
        return 'Észak-Nyugati';
      }
    } else {
      return 'Hiányos adat!';
    }
  };

  const isFreeze = (freeze) => {
    if (freeze !== null && freeze !== undefined) {
      if (freeze > 0) {
        return 'Nem volt fagy';
      } else {
        return 'Fagyott';
      }
    } else {
      return 'Hiányos adat!';
    }
  };

  return (
    <>
      {stationsWithData.length < 1 ? (
        <div className="container">
          <Loader />
        </div>
      ) : (
        <div className="container">
          <CardBorder className="col text-center">
            <GroupText htmlFor="stationId">Állomás választása:</GroupText>
            <select
              className="m-2"
              value={station}
              name="stations"
              id="stations"
              onChange={(e) => setStation(e.target.value)}
            >
              <option defaultValue>-</option>
              {stationsWithData.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </CardBorder>
        </div>
      )}
      {weatherData !== null ? (
        <>
          <TitleText>Dashboard</TitleText>
          <div className="container">
            <div className="row">
              <CardBorder className="col">
                <GroupText>Vegyes adatok:</GroupText>
                <MiscGrid>
                  {miscData(weatherData).map((data) => {
                    return (
                      <div className="p-2 m-2" key={data.titleText}>
                        <div className="col">
                          <MeasureCard
                            Icon={data.icon}
                            titleText={data.titleText}
                            text={data.text}
                            unit={data.unit}
                            footerText={dateFormat(weatherData.date)}
                          ></MeasureCard>
                        </div>
                      </div>
                    );
                  })}
                  ;
                </MiscGrid>
              </CardBorder>
              <CardBorder className="col">
                <GroupText>Levegő adatok:</GroupText>
                {airData(weatherData).map((data) => {
                  return (
                    <div className="p-2 m-2" key={data.titleText}>
                      <MeasureCard
                        Icon={data.icon}
                        titleText={data.titleText}
                        text={data.text}
                        unit={data.unit}
                        footerText={dateFormat(weatherData.date)}
                      ></MeasureCard>
                    </div>
                  );
                })}
              </CardBorder>
            </div>
            <CardBorder>
              <GroupText>Szél adatok:</GroupText>
              <WindGrid>
                {windData(weatherData).map((data) => {
                  return (
                    <div className="p-2 m-2" key={data.titleText}>
                      <div className="col">
                        <MeasureCard
                          Icon={data.icon}
                          titleText={data.titleText}
                          text={data.text}
                          unit={data.unit}
                          footerText={dateFormat(weatherData.date)}
                        ></MeasureCard>
                      </div>
                    </div>
                  );
                })}
                ;
              </WindGrid>
            </CardBorder>
            <CardBorder>
              <GroupText>Talajnedvesség adatok:</GroupText>
              <SoilGrid>
                {soilData(weatherData).map((data) => {
                  return (
                    <div className="p-2 m-2" key={data.titleText}>
                      <div className="col">
                        <MeasureCard
                          Icon={data.icon}
                          titleText={data.titleText}
                          text={data.text}
                          unit={data.unit}
                          footerText={dateFormat(weatherData.date)}
                        ></MeasureCard>
                      </div>
                    </div>
                  );
                })}
                ;
              </SoilGrid>
            </CardBorder>
            <CardBorder>
              <GroupText>Szerviz adatok:</GroupText>
              <BatteryGrid>
                {batteryData(weatherData).map((data) => {
                  return (
                    <div className="p-2 m-2" key={data.titleText}>
                      <div className="col">
                        <MeasureCard
                          Icon={data.icon}
                          titleText={data.titleText}
                          text={data.text}
                          unit={data.unit}
                          footerText={dateFormat(weatherData.date)}
                        ></MeasureCard>
                      </div>
                    </div>
                  );
                })}
                ;
              </BatteryGrid>
            </CardBorder>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="row">
            <NavLink to="/mapview">
              <StyleZoom>
                <InfoStyle>
                  <CardData>Nincs megjelenítendő adat!</CardData>
                </InfoStyle>
              </StyleZoom>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
