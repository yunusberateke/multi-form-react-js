import React from "react";
import styles from "./Checkbox.module.scss";
const index = ({ selected, onClick }) => {
  const onChange = () => onClick?.();

  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={selected}
      onChange={onChange}
    />
  );
};

export default index;
