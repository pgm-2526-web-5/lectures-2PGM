const Render = () => {
  // React wil steeds 1 element!
  console.log("Dit is een render");

  const day = "Wednesday";

  if (day === "Monday") {
    return <h1>Het is maandag</h1>;
  }

  if (day === "Tuesday") {
    return <h1>Het is dinsdag</h1>;
  }

  return (
    <>
      <h1 id="test">Het is niet maandag of dinsdag</h1>
      <p>dflkjkdkd lkdfjkld</p>
    </>
  );
};

export default Render;
