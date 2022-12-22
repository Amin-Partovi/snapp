import React from "react";

import { Address } from "../../utils/types";

import styles from "./header.module.css";

interface Props {
  address: Address;
}
const Header: React.FC<Props> = ({ address }) => {
  return (
    <div className={styles.header}>
      {address?.length > 0 && address.map((item) => <span>{item}</span>)}
    </div>
  );
};

export default Header;
