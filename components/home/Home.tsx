import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Container from "../container/Container";
import Input from "../input/Input";
import Search from "../../public/search.svg";
import { messages } from "../../statics/messages";

import styles from "./home.module.css";
import { LatLngExpression } from "leaflet";
import useDebounce from "../../utils/hooks/useDebounce";
import { Address } from "../../utils/types";
import Header from "../header/Header";

const MapWithNoSSR = dynamic(() => import("../map/Map"), {
  ssr: false,
});

const InitialLocation: LatLngExpression = [35.7343, 51.3587];

const Home: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const [location, setLocation] = useState<LatLngExpression>(InitialLocation);
  const [address, setAddress] = useState<Address>();

  const debouncedTerm = useDebounce(term);
  const debouncedLocation = useDebounce(location);

  useEffect(() => {
    if (debouncedTerm) searchAddress(debouncedTerm);
  }, [debouncedTerm]);

  useEffect(() => {
    searchLocation(debouncedLocation);
  }, [debouncedLocation]);

  function handleDeleteTerm() {
    setTerm("");
  }

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
      .then((res) => setAddress(res));
  }

  function handleChangeAddress(e: React.ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }
  return (
    <>
      <Header address={address} />
      <Container>
        <Input
          value={term}
          onChange={handleChangeAddress}
          icon={Search}
          placeholder={messages.SEARCH_TEH}
          className={styles.search}
          onDelete={handleDeleteTerm}
        />
        <MapWithNoSSR
          location={location}
          onChangeLocation={handleChangeLocation}
        />
      </Container>
    </>
  );
};

export default Home;
