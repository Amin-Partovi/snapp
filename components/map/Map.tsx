import React from "react";
import { MapContainer, TileLayer, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { messages } from "../../statics/messages";
import CustomMarker from "./CustomMarker";

import styles from "./map.module.css";
import { LatLngExpression } from "leaflet";

interface Props {
  location: LatLngExpression;
}

const INIT_ZOOM = 12;

const Map: React.FC<Props> = ({ location }) => {
  return (
    <>
      <MapContainer
        center={location}
        zoom={INIT_ZOOM}
        scrollWheelZoom={true}
        className={styles.mapContainer}
        zoomControl={false}
      >
        <ZoomControl position="bottomleft" />
        <TileLayer url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png" />
        <CustomMarker position={location}>
          <Popup>{messages.YOUR_LOCATION}</Popup>
        </CustomMarker>
      </MapContainer>
    </>
  );
};

export default Map;
