import "./RecipeDetailPage.css";
import { Link, useParams } from "react-router";
import Container from "@design/Container/Container";
import { useEffect, useState } from "react";
import { fetchRecipe } from "@core/modules/recipes/recipes.api";
import DataView from "@functional/Data/DataView";
import RecipeDetail from "@functional/Recipes/RecipeDetail";

const RecipeDetailPage = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchRecipe(id)
      .then((data) => setData(data))
      .catch((e) => setError(String(e)));
  }, [id]);

  return (
    <Container>
      <Link to="/">← Terug naar home</Link>
      <DataView data={data} error={error} onRender={(recipe) => <RecipeDetail recipe={recipe} />} />
    </Container>
  );
};

export default RecipeDetailPage;
