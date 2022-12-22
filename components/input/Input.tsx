import Image from "next/image";
import React, { InputHTMLAttributes } from "react";

import Close from "../../public/close.svg";
import styles from "./input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  icon: string;
  onDelete: () => void;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  icon,
  className,
  onDelete,
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
      {value && (
        <Image
          src={Close}
          alt="close"
          width={10}
          height={10}
          onClick={onDelete}
          className={styles.close}
        />
      )}
    </div>
  );
};

export default Input;
