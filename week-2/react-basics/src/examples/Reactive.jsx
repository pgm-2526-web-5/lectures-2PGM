import { useState } from "react";

const Reactive = () => {
  // variabele aanmaken die "reactive" is
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  console.log(count);

  const handleAddItem = () => {
    // optie 1
    // setProducts((prevProducts) => [...prevProducts, "Nieuw item " + Date.now()]);
    // optie 2
    setProducts([...products, "Nieuw item " + Date.now()]);
  };

  return (
    <div>
      <p>Aantal keer geklikt: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Verhoog klik</button>
      <button onClick={handleAddItem}>Voeg item toe</button>
      <ul>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reactive;
