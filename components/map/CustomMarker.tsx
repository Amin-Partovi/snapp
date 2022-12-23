import React, { PropsWithChildren } from "react";
import { LatLngTuple, icon, Marker as MarkerInterface } from "leaflet";
import { Marker } from "react-leaflet";

const ICON = icon({
  iconUrl: "/marker.svg",
  iconSize: [50, 50],
});

interface Props extends PropsWithChildren<any> {
  position: LatLngTuple;
}

const CustomMarker = React.forwardRef<MarkerInterface, Props>((props, ref) => {
  const { children, position } = props;
  return (
    <Marker position={position} icon={ICON} autoPan={true} ref={ref}>
      {children}
    </Marker>
  );
});

CustomMarker.displayName = "CustomMarker";

export default CustomMarker;
