import { useState } from "react";

const Share = () => {
  const [value, setValue] = useState("");

  const handleTextarea = (e) => {
    const { value: inputValue } = e.target;
    if (inputValue.length <= 160) {
      setValue(inputValue);
    }
  };

  return (
    <>
      <textarea maxLength={160} onChange={handleTextarea} value={value} name="" id=""></textarea>
      {value.length} / 160
    </>
  );
};

export default Share;
