import Image from "next/image";
import React, { InputHTMLAttributes } from "react";

import styles from "./input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  icon: string;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  icon,
  className,
  ...rest
}) => {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <Image src={icon} alt="icon" width={15} height={15} />
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
