import React, { useState } from "react";
import { PlanCard, Button, Switch } from "../../../components";
import styles from "./Plan.module.scss";
import cx from "classnames";

const index = ({
  contentTitle,
  contentDescription,
  formFields,
  backStep,
  nextStep,
  nextSteped,
  formDataDefault,
}) => {
  const [formData, setFormData] = useState(formDataDefault);

  const nextStepButton = () => {
    !!formData.key && nextStep(formData, "plan");
  };

  return (
    <div className={styles.plans}>
      <div className={styles.plansContent}>
        <div className={styles.plansContentHeader}>
          <div className={styles.plansContentHeaderTitle}>{contentTitle}</div>
          <div className={styles.plansContentHeaderDescription}>
            {contentDescription}
          </div>
        </div>
        <div className={styles.plansContentCards}>
          {formFields.plans.map((plan) => (
            <PlanCard
              key={plan.key}
              title={plan.title}
              icon={plan.icon}
              monthlyFee={plan.monthlyFee}
              selected={formData.key === plan.key}
              onClick={() => setFormData({ ...formData, key: plan.key })}
            />
          ))}
        </div>
        <div className={styles.plansContentMonthOrYear}>
          <span
            className={cx(styles.plansContentMonthOrYearItem, {
              [styles.switchSelected]: !formData.yearly,
            })}
          >
            Monthly
          </span>
          <Switch
            selected={formData.yearly}
            onClick={() =>
              setFormData({ ...formData, yearly: !formData.yearly })
            }
          />
          <span
            className={cx(styles.plansContentMonthOrYearItem, {
              [styles.switchSelected]: formData.yearly,
            })}
          >
            Yearly
          </span>
        </div>
      </div>
      <div
        className={cx(styles.plansActions, { [styles.onlyNext]: nextSteped })}
      >
        {!nextSteped && (
          <Button type="link" text="Go Back" onClick={() => backStep("plan")} />
        )}

        <Button
          text={nextSteped ? "Save" : "Next Step"}
          disabled={!formData.key}
          onClick={nextStepButton}
        />
      </div>
    </div>
  );
};

export default index;
