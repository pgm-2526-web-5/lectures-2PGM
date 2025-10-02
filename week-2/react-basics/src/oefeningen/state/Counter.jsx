import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(5);

  const increase = () => setValue((number) => number + 1);
  const reduce = () => setValue((number) => Math.max(0, number - 1));

  return (
    <div>
      <button onClick={reduce} disabled={value === 0}>
        -
      </button>
      <span>{value}</span>
      <button onClick={increase}>+</button>
      {value >= 10 && <p> waarde mag niet groter dan of gelijk aan 10 </p>}
    </div>
  );
}

export default Counter;
