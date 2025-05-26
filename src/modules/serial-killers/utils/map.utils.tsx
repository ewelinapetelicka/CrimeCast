import { Icon, Style } from 'ol/style';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { MapMarker } from '../models/map.ts';

export function createMarker(marker: MapMarker): Feature<Point> {
  const markerStyle = new Style({
    image: new Icon({
      anchor: [0.5, 1],
      src: 'https://openlayers.org/en/latest/examples/data/icon.png',
    }),
  });

  const iconFeature = new Feature({
    geometry: new Point(fromLonLat([marker.lon, marker.lat])),
    name: 'Null Island',
  });
  iconFeature.setStyle(markerStyle);

  return iconFeature;
}
