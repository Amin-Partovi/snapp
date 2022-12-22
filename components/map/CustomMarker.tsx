import React, { PropsWithChildren } from "react";
import { LatLngTuple, icon } from "leaflet";
import { Marker } from "react-leaflet";

const ICON = icon({
  iconUrl: "/marker.svg",
  iconSize: [50, 50],
});

interface Props extends PropsWithChildren<any> {
  position: LatLngTuple;
}

const CustomMarker: React.FC<Props> = ({ children, position }) => {
  return (
    <Marker position={position} icon={ICON} autoPan={true}>
      {children}
    </Marker>
  );
};

export default CustomMarker;
