import Image from "next/image";
import React, { InputHTMLAttributes } from "react";

import styles from "./input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  icon: string;
}

const Input: React.FC<Props> = ({ value, onChange, icon, ...rest }) => {
  return (
    <div className={styles.inputGroup}>
      <Image src={icon} alt="icon" width={20} height={20} />
      <input
        value={value}
        onChange={onChange}
        className={styles.input}
        {...rest}
      />
    </div>
  );
};

export default Input;
