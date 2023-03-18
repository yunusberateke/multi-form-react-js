import React from "react";
import styles from "./Input.module.scss";
import cx from "classnames";

const index = ({
  label,
  placeholder,
  value,
  error,
  errorMessage,
  classNames,
  onChangeInput,
}) => {
  return (
    <div
      className={cx(
        [styles.inputWrapper],
        {
          [styles.inputWrapperError]: error,
        },
        [...classNames]
      )}
    >
      <div className={styles.header}>
        <label>{label}</label>
        <div className={styles.error}>{errorMessage}</div>
      </div>
      <input placeholder={placeholder} value={value} onChange={onChangeInput} />
    </div>
  );
};

export default index;
