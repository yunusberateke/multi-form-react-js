import React from "react";
import { Checkbox } from "..";
import styles from "./AddOnsCard.module.scss";

const index = ({ fieldKey, title, description, price, selected, onClick }) => {
  return (
    <div className={styles.addOnsCard} onClick={() => onClick?.(fieldKey)}>
      <div className={styles.addOnsCardLeft}>
        <div className={styles.addOnsCardLeftSelectBox}>
          <Checkbox selected={selected} />
        </div>
        <div className={styles.addOnsCardLeftContent}>
          <div className={styles.addOnsCardLeftTitle}>{title}</div>
          <div className={styles.addOnsCardLeftDescription}>{description}</div>
        </div>
      </div>
      <div className={styles.addOnsCardPrice}>+${price}/mo</div>
    </div>
  );
};

export default index;
