import React, { useEffect, useState } from "react";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { TileLayer, Popup, ZoomControl, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { messages } from "../../statics/messages";
import CustomMarker from "./CustomMarker";

interface Props {
  location: LatLngExpression;
  onChangeLocation: (location: LatLngExpression) => void;
}

const MapContent: React.FC<Props> = ({ location, onChangeLocation }) => {
  const map = useMapEvents({
    click(e: LeafletMouseEvent) {
      map.locate();
      onChangeLocation(Object.values(e.latlng));
    },
    drag(e) {
      onChangeLocation(Object.values(e.target.getCenter()));
    },
  });

  useEffect(() => {
    map.flyTo(location);
  }, [location]);

  return location === null ? null : (
    <>
      <ZoomControl position="bottomleft" />
      <TileLayer url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png" />
      <CustomMarker position={location}>
        <Popup>{messages.YOUR_LOCATION}</Popup>
      </CustomMarker>
    </>
  );
};

export default MapContent;
