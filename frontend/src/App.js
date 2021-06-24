import Map from './Map/Map.js';
import { Marker, TileLayer, MapContainer } from 'react-leaflet';
import styled from 'styled-components';
import { useGeolocation } from 'react-use';
import UserIcon from './Icon/UserIcon';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 80vh;
`;

function App() {
  const myPosition = useGeolocation();
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
        {myPosition.latitude !== null && (
          <>
            <pre>{(myPosition, null, 2)}</pre>
            <Marker
              icon={UserIcon}
              position={[myPosition.latitude, myPosition.longitude]}
            ></Marker>
          </>
        )}
      </StyledMapContainer>
    </div>
  );
}

export default App;
