import { useState } from "react";

const InputExample = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Hallo {name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default InputExample;
