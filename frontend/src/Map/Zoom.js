import { useMapEvents } from 'react-leaflet';

export default function Zoom({ zoomLevel, setZoomLevel }) {
  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
    },
  });

  return null;
}
