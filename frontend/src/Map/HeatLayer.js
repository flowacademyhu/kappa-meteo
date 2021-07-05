import 'leaflet.heat';
import L from 'leaflet';

import { createLayerComponent, updateGridLayer } from '@react-leaflet/core';

const createLeafletElement = ({ points, radius, blur }, context) => {
  const instance = L.heatLayer(points, { radius, blur });
  return { instance, context };
};

export default createLayerComponent(createLeafletElement, updateGridLayer);
