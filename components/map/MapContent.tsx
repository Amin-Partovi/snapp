import React, { useEffect, useRef } from "react";
import { LatLngTuple, LeafletEvent, LeafletMouseEvent } from "leaflet";
import {
  TileLayer,
  Popup,
  ZoomControl,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { messages } from "../../statics/messages";
import CustomMarker from "./CustomMarker";
import { urls } from "../../statics/urls";

interface Props {
  location: LatLngTuple;
  onChangeLocation: (location: LatLngTuple) => void;
}

const MapContent: React.FC<Props> = ({ location, onChangeLocation }) => {
  const markerRef = useRef<HTMLElement>();
  const map = useMapEvents({
    click(e: LeafletMouseEvent) {
      map.locate();
      onChangeLocation(Object.values(e.latlng));
    },
    drag(e: LeafletEvent) {
      markerRef.current.setLatLng(map.getCenter());
    },
    dragend(e: LeafletEvent) {
      onChangeLocation(Object.values(e.target.getCenter()));
    },
  });

  useEffect(() => {
    map.flyTo(location);
  }, [location]);

  return location === null ? null : (
    <>
      <ZoomControl position="bottomleft" />

      <TileLayer url={urls.TILE_SERVER} />

      <CustomMarker position={location} ref={markerRef}>
        <Popup>{messages.YOUR_LOCATION}</Popup>
      </CustomMarker>
    </>
  );
};

export default MapContent;
