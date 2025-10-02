import { useState } from "react";
import Circle from "./Circle";

const CircleSwitcher = () => {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "gray", "black"];

  const [currentColor, setCurrentColor] = useState(0);
  // maak een state, state reactive waarde dat zichzelf update

  const handleNextColor = () => {
    setCurrentColor((prevColor) => (prevColor + 1) % colors.length);
    // neem vorige kleur, doe deze + 1 en bekijk wat de overschot is van dat gedeeld door de lengte...
  };

  return (
    <div>
      <Circle width={100} color={colors[currentColor]} />
      {/* circle breedte is gelijk aan 100px de kleur is gelijk aan de currentColor */}
      <button onClick={handleNextColor}>Next Color</button>
      {/* wanneer button click => voer event uit om next color */}
    </div>
  );
};

export default CircleSwitcher;
