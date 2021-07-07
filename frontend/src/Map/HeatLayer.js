import 'leaflet.heat';
import L from 'leaflet';

import { createLayerComponent, updateGridLayer } from '@react-leaflet/core';

const createLeafletElement = ({ points, radius, blur, maxZoom }, context) => {
  const instance = L.heatLayer(points, { radius, blur, maxZoom });
  return { instance, context };
};

export function updateHeatLayer(layer, props, prevProps) {
  updateGridLayer(layer, props, prevProps);
  const { points } = props;
  if (points != null && points !== prevProps.points) {
    layer.setLatLngs(points);
  }
}

export default createLayerComponent(createLeafletElement, updateHeatLayer);
