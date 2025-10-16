import "./Step.css";

const Step = ({ description }) => {
  return (
    <li className="step">
      <p className="step__description">{description}</p>
    </li>
  );
};

export default Step;
