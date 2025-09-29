const ArrayWithKey = () => {
  const products = [
    {
      id: 1,
      title: "Laptop",
    },
    {
      id: 2,
      title: "PS5",
    },
  ];

  return (
    <>
      <h1 id="test">Dit zijn producten</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ArrayWithKey;
