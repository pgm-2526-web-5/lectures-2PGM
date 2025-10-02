import { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && <p>Dit is een verborgen bericht</p>}
      <button onClick={handleToggler}>{isVisible ? "Verberg" : "Toon"}</button>
    </>
  );
};

export default ToggleText;
