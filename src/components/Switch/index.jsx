import React from "react";
import styles from "./Switch.module.scss";
import cx from "classnames";

const index = ({ selected, onClick }) => {
  return (
    <span className={styles.switch} onClick={onClick}>
      <div
        className={cx(styles.switchDot, { [styles.switchSelected]: selected })}
      ></div>
    </span>
  );
};

export default index;
