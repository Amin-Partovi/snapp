import React from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";

import Location from "./Location";
import MapContent from "./MapContent";

import styles from "./map.module.css";

interface Props {
  location: LatLngTuple;
  onChangeLocation: (location: LatLngTuple) => void;
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
