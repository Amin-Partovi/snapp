import React, { useEffect } from "react";
import { LatLngTuple, LeafletMouseEvent } from "leaflet";
import { TileLayer, Popup, ZoomControl, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { messages } from "../../statics/messages";
import CustomMarker from "./CustomMarker";
import { urls } from "../../statics/urls";

interface Props {
  location: LatLngTuple;
  onChangeLocation: (location: LatLngTuple) => void;
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
      <TileLayer url={urls.TILE_SERVER} />
      <CustomMarker position={location}>
        <Popup>{messages.YOUR_LOCATION}</Popup>
      </CustomMarker>
    </>
  );
};

export default MapContent;
