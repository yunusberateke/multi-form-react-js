import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";

const index = ({ type, text, disabled, onClick }) => {
  return (
    <button
      className={cx([styles.tknButton], [styles[type]], {
        [styles.tknButtonDisabled]: disabled,
      })}
      onClick={() => !disabled && onClick()}
    >
      {text}
    </button>
  );
};

export default index;
