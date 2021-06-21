import Map from './Map/Map.js';
import useGeoLocation from './Map/UseGeoLocation.js';
import UserIcon from './Icon/UserIcon.js';
import { Marker, TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 80vh;
`;

function App() {
  const location = useGeoLocation();

  return (
    <div data-testid="map-container">
      <StyledMapContainer
        center={[47.497913, 19.040236]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Map></Map>
        {location.loaded && !location.error && (
          <Marker
            icon={UserIcon}
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </StyledMapContainer>
    </div>
  );
}

export default App;
