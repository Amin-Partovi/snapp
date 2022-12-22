import React from "react";
import { LatLngTuple } from "leaflet";
import { messages } from "../../statics/messages";

import styles from "./location.module.css";

interface Props {
  location: LatLngTuple;
}

const Location: React.FC<Props> = ({ location }) => {
  return (
    <div className={styles.locationBox}>
      <span>
        {messages.LAT}: {location[0]?.toFixed(3)}
      </span>
      <span>
        {messages.LNG}: {location[1]?.toFixed(3)}
      </span>
    </div>
  );
};

export default Location;
