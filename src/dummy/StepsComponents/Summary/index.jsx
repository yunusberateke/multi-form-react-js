import React from "react";
import style from "./Summary.module.scss";
import { Button } from "../../../components";
import { stepsDumyData } from "../..";

const index = ({
  nextSteped,
  backStep,
  goStepWithKey,
  allFormData,
  contentTitle,
  contentDescription,
}) => {
  const finishStep = () => {
    console.log(allFormData);
  };

  const goPlanStep = () => {
    goStepWithKey("plan");
  };

  const plan = stepsDumyData
    .find((e) => e.key === "plan")
    .formFields.plans.find((e) => e.key === allFormData.plan.key);
  const addOns = allFormData.addOns;
  const planPrice = !allFormData.plan.yearly
    ? plan.monthlyFee
    : plan.monthlyFee * 12;
  const addOnsPrice = Object.keys(addOns).reduce((prev, key) => {
    const value = addOns[key];
    const price = !allFormData.plan.yearly ? value.price : value.price * 12;
    return value.selected ? prev + price : prev;
  }, 0);

  return (
    <div className={style.summary}>
      <div className={style.summaryHeader}>
        <div className={style.summaryHeaderTitle}>{contentTitle}</div>
        <div className={style.summaryHeaderDescription}>
          {contentDescription}
        </div>
      </div>
      <div className={style.summaryContent}>
        <div className={style.summaryContentPlan}>
          <div className={style.summaryContentPlanLeft}>
            <div className={style.summaryContentPlanLeftTitle}>
              {plan.title} ({allFormData.plan.yearly ? "Yearly" : "Monthly"})
            </div>
            <div
              className={style.summaryContentPlanLeftButton}
              onClick={goPlanStep}
            >
              Change
            </div>
          </div>
          <div className={style.summaryContentPlanRight}>
            ${!allFormData.plan.yearly ? plan.monthlyFee : plan.monthlyFee * 12}
            /{!allFormData.plan.yearly ? "mo" : "ye"}
          </div>
        </div>

        <div className={style.summaryContentAddOns}>
          {Object.keys(addOns).map((key) => {
            const value = addOns[key];
            return (
              value.selected && (
                <div className={style.summaryContentAddOnsItem} key={key}>
                  <div className={style.summaryContentAddOnsItemTitle}>
                    {value.title}
                  </div>
                  <div className={style.summaryContentAddOnsItemPrice}>
                    +$
                    {!allFormData.plan.yearly ? value.price : value.price * 12}/
                    {!allFormData.plan.yearly ? "mo" : "ye"}
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className={style.summaryTotalCount}>
        <div className={style.summaryTotalCountTitle}>
          Total (per {!allFormData.plan.yearly ? "month" : "year"})
        </div>
        <div className={style.summaryTotalCountContent}>
          +${planPrice + addOnsPrice}/{!allFormData.plan.yearly ? "mo" : "ye"}
        </div>
      </div>
      <div className={style.summaryActions}>
        {!nextSteped && (
          <Button
            type="link"
            text="Go Back"
            onClick={() => backStep("summary")}
          />
        )}

        <Button text={nextSteped ? "Save" : "Confirm"} onClick={finishStep} />
      </div>
    </div>
  );
};

export default index;
