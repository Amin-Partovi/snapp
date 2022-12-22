import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Container from "../container/Container";
import Input from "../input/Input";
import Search from "../../public/search.svg";
import { messages } from "../../statics/messages";

import styles from "./home.module.css";
import { LatLngExpression } from "leaflet";
import useDebounce from "../../utils/hooks/useDebounce";

const MapWithNoSSR = dynamic(() => import("../map/Map"), {
  ssr: false,
});

const InitialLocation: LatLngExpression = [35.7343, 51.3587];

const Home: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [location, setLocation] = useState<LatLngExpression>(InitialLocation);

  const debouncedAddress = useDebounce(address);
  const debouncedLocation = useDebounce(location);

  function handleChangeLocation(location: LatLngExpression) {
    setLocation(location);
  }

  function searchAddress(address: string) {
    fetch(`/search/search-address?address=${address}`)
      .then((res) => res.json())
      .then((res) => {
        handleChangeLocation([res.lat, res.lng]);
      });
  }

  function searchLocation(debouncedLocation: LatLngExpression) {
    fetch(
      `/search/get-address?lat=${debouncedLocation[0]}&lng=${debouncedLocation[1]}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  useEffect(() => {
    if (debouncedAddress) searchAddress(debouncedAddress);
  }, [debouncedAddress]);

  useEffect(() => {
    searchLocation(debouncedLocation);
  }, [debouncedLocation]);

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
      <MapWithNoSSR
        location={location}
        onChangeLocation={handleChangeLocation}
      />
    </Container>
  );
};

export default Home;
