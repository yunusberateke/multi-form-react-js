import "./style/import.scss";
import "./App.scss";
import { StepContainer } from "./components";
import { stepsDumyData } from "./dummy";
import { useState } from "react";
function App() {
  const [steps, setSteps] = useState(stepsDumyData);
  const [allFormData, setAllFormData] = useState({
    info: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    plan: {
      key: "pro",
      yearly: false,
    },
    addOns: steps.find((e) => e.key === "addOns").formFields.addOnsCards,
  });

  const handleStepClick = (step) => {
    goStepWithKey(step.key)
  };

  const goStepWithKey = (stepKey) => {
    setSteps(
      steps.map((e) => ({
        ...e,
        active: e.key === stepKey,
      }))
    );
  };

  const nextStep = (formData, key) => {
    const nAllFormData = { ...allFormData };
    nAllFormData[key] = formData;
    setAllFormData(nAllFormData);
    const currStepIndex = steps.findIndex((e) => e.key === key);
    setSteps(
      steps.map((e, k) => {
        return {
          ...e,
          disabled: k > currStepIndex + 1,
          active: k === currStepIndex + 1,
          nextSteped: k === currStepIndex,
        };
      })
    );
  };

  const backStep = (key) => {
    const currStepIndex = steps.findIndex((e) => e.key === key);

    setSteps(
      steps.map((e, k) => {
        return {
          ...e,
          active: k === currStepIndex - 1,
        };
      })
    );
  };

  return (
    <div className="container">
      <StepContainer
        allFormData={allFormData}
        steps={steps}
        handleStepClick={handleStepClick}
        nextStep={nextStep}
        backStep={backStep}
        goStepWithKey={goStepWithKey}
      />
    </div>
  );
}

export default App;
