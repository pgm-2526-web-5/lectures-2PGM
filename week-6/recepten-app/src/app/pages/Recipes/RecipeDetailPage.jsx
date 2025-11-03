import "./RecipeDetailPage.css";
import { Link, useParams } from "react-router";
import Container from "@design/Container/Container";
import { fetchRecipe } from "@core/modules/recipes/recipes.api";
import DataView from "@functional/Data/DataView";
import RecipeDetail from "@functional/Recipes/RecipeDetail";
import { useQuery } from "@tanstack/react-query";

const RecipeDetailPage = () => {
  const { id } = useParams();

  const { data, error } = useQuery({
    queryKey: ["recipes", id],
    queryFn: () => fetchRecipe(id),
  });

  return (
    <Container>
      <Link to="/">← Terug naar home</Link>
      <DataView data={data} error={error} onRender={(recipe) => <RecipeDetail recipe={recipe} />} />
    </Container>
  );
};

export default RecipeDetailPage;
