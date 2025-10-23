import Container from "@design/Container/Container";
import PageTitle from "@design/Typography/PageTitle";
import Grid from "@design/Grid/Grid";
import ImageCard from "@design/Card/ImageCard";
import { Link } from "react-router";
import { fetchRecipes } from "@core/modules/recipes/recipes.api";
import DataView from "@functional/Data/DataView";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  return (
    <Container>
      <PageTitle>Laatste recepten</PageTitle>
      <DataView
        data={data}
        error={error}
        onRender={(data) => (
          <Grid>
            {data.map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/recipes/${recipe.slug}/${recipe.id}`}>
                  <ImageCard image={recipe.image} title={recipe.name} />
                </Link>
              </li>
            ))}
          </Grid>
        )}
      />
    </Container>
  );
};

export default HomePage;
