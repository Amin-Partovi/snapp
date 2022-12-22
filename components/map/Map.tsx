import React from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

import Location from "./Location";

import styles from "./map.module.css";
import MapContent from "./MapContent";

interface Props {
  location: LatLngExpression;
  onChangeLocation: (location: LatLngExpression) => void;
}

const INIT_ZOOM = 12;

const Map: React.FC<Props> = ({ location, onChangeLocation }) => {
  return (
    <>
      <MapContainer
        center={location}
        zoom={INIT_ZOOM}
        scrollWheelZoom={true}
        className={styles.mapContainer}
        zoomControl={false}
      >
        <MapContent location={location} onChangeLocation={onChangeLocation} />
      </MapContainer>
      <Location location={location} />
    </>
  );
};

export default Map;
