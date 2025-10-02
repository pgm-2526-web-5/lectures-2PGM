import React, { useState } from "react";

const UserInfo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Jouw naam: {name}</p>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <p>jouw leeftijd: {age}</p>
    </>
  );
};

export default UserInfo;
