import React from "react";
import { MapContainer, TileLayer, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

import { messages } from "../../statics/messages";
import CustomMarker from "./CustomMarker";

import styles from "./map.module.css";

const CENTER: LatLngExpression = [35.7343, 51.3587];
const INIT_ZOOM = 12;

const Map: React.FC = () => {
  return (
    <>
      <MapContainer
        center={CENTER}
        zoom={INIT_ZOOM}
        scrollWheelZoom={true}
        className={styles.mapContainer}
        zoomControl={false}
      >
        <ZoomControl position="bottomleft" />
        <TileLayer url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png" />
        <CustomMarker position={CENTER}>
          <Popup>{messages.YOUR_LOCATION}</Popup>
        </CustomMarker>
      </MapContainer>
    </>
  );
};

export default Map;
