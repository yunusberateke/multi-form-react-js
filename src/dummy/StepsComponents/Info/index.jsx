import React, { useState } from "react";
import { Input, Button } from "../../../components";
import styles from "./Info.module.scss";

const Step1 = ({
  formFields,
  contentTitle,
  contentDescription,
  nextStep,
  nextSteped,
  formDataDefault,
}) => {
  const [valid, setValid] = useState(false);
  const [formData, setFormData] = useState(formDataDefault);

  const onChangeForm = (e, type) => {
    const nStep1Form = { ...formData };
    nStep1Form[type] = e.target.value;
    setFormData(nStep1Form);
  };

  const nextStepButton = () => {
    if (!valid) setValid(true);
    !anyNotValidField() && nextStep(formData, "info");
  };

  const anyNotValidField = () => {
    const anyNotValidField = Object.keys(formFields).some((fieldKey) => {
      const field = formFields[fieldKey];
      return !!field.validation(formData[fieldKey]);
    });

    return anyNotValidField;
  };

  return (
    <div className={styles.step1Wrapper}>
      <div>
        <div className={styles.mainTitle}>{contentTitle}</div>
        <div className={styles.mainDescription}>{contentDescription}</div>
        {Object.keys(formFields).map((fieldKey) => {
          const field = formFields[fieldKey];
          return (
            <Input
              key={fieldKey}
              classNames={[styles.mar]}
              label={field.label}
              placeholder={field.placeholder}
              value={formData[fieldKey]}
              error={!!field.validation(formData[fieldKey], valid)}
              errorMessage={field.validation(formData[fieldKey], valid)}
              onChangeInput={(e) => onChangeForm(e, fieldKey)}
            />
          );
        })}
      </div>
      <div className={styles.actions}>
        <Button
          text={nextSteped ? "Save" : "Next Step"}
          disabled={valid && anyNotValidField()}
          onClick={nextStepButton}
        />
      </div>
    </div>
  );
};

export default Step1;
