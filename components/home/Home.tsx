import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { LatLngTuple } from "leaflet";
import { format } from "react-string-format";

import Container from "../container/Container";
import Input from "../input/Input";
import Search from "../../public/search.svg";
import { messages } from "../../statics/messages";
import useDebounce from "../../utils/hooks/useDebounce";
import { Address } from "../../utils/types";
import Header from "../header/Header";
import { urls } from "../../statics/urls";

import styles from "./home.module.css";

const MapWithNoSSR = dynamic(() => import("../map/Map"), {
  ssr: false,
});

const InitialLocation: LatLngTuple = [35.7343, 51.3587];

const Home: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const [location, setLocation] = useState<LatLngTuple>(InitialLocation);
  const [address, setAddress] = useState<Address>([]);

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

  function handleChangeLocation(location: LatLngTuple) {
    setLocation(location);
  }

  function searchAddress(address: string) {
    fetch(format(urls.SEARCH_ADDRESS, address))
      .then((res) => res.json())
      .then((res) => {
        handleChangeLocation([res.lat, res.lng]);
      });
  }

  function searchLocation(debouncedLocation: LatLngTuple) {
    fetch(
      format(urls.SEARCH_LOCATION, debouncedLocation[0], debouncedLocation[1])
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
