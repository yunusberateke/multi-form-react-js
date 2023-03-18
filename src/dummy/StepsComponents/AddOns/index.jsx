import React, { useState } from "react";
import { AddOnsCard, Button } from "../../../components";
import styles from "./AddOns.module.scss";
import cx from "classnames";
const index = ({
  contentTitle,
  contentDescription,
  formDataDefault,
  nextSteped,
  backStep,
  nextStep,
}) => {
  const [formData, setFormData] = useState(formDataDefault);

  const onClickHandlerAddOnsCard = (key) => {
    formData[key].selected = !formData[key].selected;
    setFormData({ ...formData });
  };

  const nextStepButton = () => {
    nextStep(formData, "addOns");
  };

  return (
    <div className={styles.addOns}>
      <div className={styles.addOnsHeader}>
        <div className={styles.addOnsHeaderTitle}>{contentTitle}</div>
        <div className={styles.addOnsHeaderDescription}>
          {contentDescription}
        </div>
      </div>
      <div className={styles.addOnsCards}>
        {Object.keys(formDataDefault).map((key) => {
          const field = formDataDefault[key];
          return (
            <AddOnsCard
              key={Math.random().toString()}
              fieldKey={key}
              title={field.title}
              description={field.description}
              price={field.price}
              selected={field.selected}
              onClick={() => onClickHandlerAddOnsCard(key)}
            />
          );
        })}
      </div>
      <div
        className={cx(styles.addOnsActions, { [styles.onlyNext]: nextSteped })}
      >
        {!nextSteped && (
          <Button
            type="link"
            text="Go Back"
            onClick={() => backStep("addOns")}
          />
        )}

        <Button
          text={nextSteped ? "Save" : "Next Step"}
          onClick={nextStepButton}
        />
      </div>
    </div>
  );
};

export default index;
