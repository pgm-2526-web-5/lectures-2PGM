import Container from "@design/Container/Container";
import data from "../../../data/recipes.json";
import PageTitle from "@design/Typography/PageTitle";
import Grid from "@design/Grid/Grid";
import ImageCard from "@design/Card/ImageCard";
import { Link } from "react-router";

const Home = () => {
  return (
    <Container>
      <PageTitle>Laatste recepten</PageTitle>
      <Grid>
        {data.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.slug}/${recipe.id}`}>
              <ImageCard image={recipe.image} title={recipe.name} />
            </Link>
          </li>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
