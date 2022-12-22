import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Container from "../container/Container";
import Input from "../input/Input";
import Search from "../../public/search.svg";
import { messages } from "../../statics/messages";

import styles from "./home.module.css";
import { LatLngExpression } from "leaflet";

const MapWithNoSSR = dynamic(() => import("../map/Map"), {
  ssr: false,
});

const InitialLocation: LatLngExpression = [35.7343, 51.3587];

const Home: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [location, setLocation] = useState<LatLngExpression>(InitialLocation);

  function sendAddress(address: string) {
    fetch(`/search/search-address?address=${address}`)
      .then((res) => res.json())
      .then((res) => {
        setLocation([res.lat, res.lng]);
      });
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (address) {
      timeoutId = setTimeout(() => sendAddress(address), 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [address]);

  function handleChangeAddress(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }
  return (
    <Container>
      <Input
        value={address}
        onChange={handleChangeAddress}
        icon={Search}
        placeholder={messages.SEARCH_TEH}
        className={styles.search}
      />
      <MapWithNoSSR location={location} />
    </Container>
  );
};

export default Home;
