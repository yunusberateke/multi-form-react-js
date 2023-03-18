import React from "react";
import StepContainerSteps from "../StepContainerSteps";
import "./StepContainer.scss";

const index = ({
  steps,
  handleStepClick,
  nextStep,
  goStepWithKey,
  backStep,
  allFormData,
}) => {
  const currentStep = steps.find((e) => e.active);
  const currentFormData = allFormData[currentStep.key];
  return (
    <div className="tnk">
      <StepContainerSteps steps={steps} stepClick={handleStepClick} />
      <div className="tnk-content">
        {
          <currentStep.component
            allFormData={allFormData}
            formDataDefault={currentFormData}
            formFields={currentStep.formFields}
            nextStep={nextStep}
            backStep={backStep}
            goStepWithKey={goStepWithKey}
            nextSteped={currentStep.nextSteped}
            {...currentStep.componentProps}
          />
        }
      </div>
    </div>
  );
};

export default index;
