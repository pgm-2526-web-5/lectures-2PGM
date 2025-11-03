import "./StepList.css";
import Step from "./Step";

const StepList = ({ steps }) => {
  return (
    <ol className="step-list">
      {steps.map((step, index) => (
        <Step key={index} description={step} />
      ))}
    </ol>
  );
};

export default StepList;
