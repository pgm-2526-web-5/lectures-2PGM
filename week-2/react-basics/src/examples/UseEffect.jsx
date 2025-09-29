import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  console.log("Hallo ik ben een render");

  useEffect(() => {
    // dit moet maar 1x worden uitgevoerd wanneer de component wordt aangemaakt
    console.log("Hallo ik ben ook een render");
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevValue) => prevValue + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  /*useEffect(() => {
    let intervalId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // opkuis functie
    return () => {
      clearTimeout(intervalId);
    };
  }, [count]);*/

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Klik</button>
    </>
  );
};

export default UseEffect;
