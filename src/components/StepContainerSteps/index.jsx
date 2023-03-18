import React from "react";
import iconsData from "../../assets/icons/iconsData";
import cx from "classnames";
import "./StepContainerSteps.scss";

const index = ({ steps, stepClick }) => {
  return (
    <div
      className="tnk-steps"
      style={{ backgroundImage: `url(${iconsData.bgSidebarDesktop})` }}
    >
      {steps.map((e, key) => (
        <div
          className={cx("step", { "step-disabled": e.disabled })}
          key={key}
          onClick={() => !e.disabled && !e.active && stepClick(e)}
        >
          <div
            className={cx("step-key", {
              "step-key-actived": e.active,
            })}
          >
            {key + 1}
          </div>
          <div className="titles">
            <div className="step-subtitle">Step {key + 1}</div>
            <div className="step-title">{e.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
