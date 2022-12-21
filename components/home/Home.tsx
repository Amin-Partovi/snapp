import React, { useState } from "react";

import Container from "../container/Container";
import Input from "../input/Input";
import Search from "../../public/search.svg";
import { messages } from "../../statics/messages";

import styles from "./home.module.css";

const Home: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  function handleChangeAddress(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }
  return (
    <div className={styles.main}>
      <Container>
        <Input
          value={address}
          onChange={handleChangeAddress}
          icon={Search}
          placeholder={messages.SEARCH_TEH}
        />
      </Container>
    </div>
  );
};

export default Home;
