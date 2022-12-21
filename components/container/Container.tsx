import React, { PropsWithChildren } from "react";

import styles from "./container.module.css";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default Container;
