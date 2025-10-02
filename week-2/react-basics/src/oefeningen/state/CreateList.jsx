import { useEffect, useState } from "react";

const separator = ";";

const CreateList = () => {
  const [text, setText] = useState("");

  const array = text.split(separator);

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateList;
