import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./map.module.css";

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[35.7343, 51.3587]}
      zoom={11}
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png" />
      <Marker position={[35.7343, 51.3587]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
