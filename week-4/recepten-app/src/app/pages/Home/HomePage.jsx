import Container from "@design/Container/Container";
import PageTitle from "@design/Typography/PageTitle";
import Grid from "@design/Grid/Grid";
import ImageCard from "@design/Card/ImageCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { fetchRecipes } from "@core/modules/recipes/recipes.api";
import DataView from "@functional/Data/DataView";

const HomePage = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetchRecipes()
      .then((data) => setData(data))
      .catch((e) => setError(String(e)));
  }, []);

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
