import 'ol/ol.css';
import { useEffect, useRef } from 'react';
import { Feature, Map, View } from 'ol';
import { Tile } from 'ol/layer';
import { OSM } from 'ol/source';
import './map.css';
import button from '../../../../styles/Button.ts';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Point } from 'ol/geom';
import { Coordinate } from 'ol/coordinate';

interface MapProps {
  onCloseClick: () => void;
  markers: Feature<Point>[];
  center: Coordinate;
}

export function MapComponent(props: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const mapObj = new Map({
      view: new View({
        center: props.center,
        zoom: 7,
      }),
      layers: [new Tile({ source: new OSM() })],
    });

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    vectorSource.addFeatures(props.markers);
    mapObj.setTarget(mapRef.current);
    mapObj.addLayer(vectorLayer);
    return () => mapObj.setTarget('');
  });

  return (
    <section className={'text-neutral-50 pb-3 h-96  w-2/3 relative flex flex-col items-end '}>
      <button className={button.text} onClick={() => props.onCloseClick()}>
        back to timeline
      </button>
      <div className={'map'} ref={mapRef} />
    </section>
  );
}
