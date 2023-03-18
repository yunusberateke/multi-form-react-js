import React from "react";
import styles from "./PlanCard.module.scss";
import cx from "classnames";
const index = ({ title, icon, monthlyFee, selected, onClick }) => {
  return (
    <div
      className={cx(styles.planCard, { [styles.planCardSelected]: selected })}
      onClick={onClick}
    >
      <div>
        <img src={icon} />
      </div>

      <div className={styles.planCardContent}>
        <div className={styles.planCardContentTitle}>{title}</div>
        <div className={styles.planCardContentFee}>${monthlyFee}/mo</div>
      </div>
    </div>
  );
};

export default index;
