import "./RecipeDetail.css";
import { Link, useParams } from "react-router";
import data from "../../../data/recipes.json";
import PageTitle from "@design/Typography/PageTitle";
import Container from "@design/Container/Container";
import Subtitle from "@design/Typography/Subtitle";
import Grid from "@design/Grid/Grid";

const RecipeDetail = () => {
  const { id, slug } = useParams();

  const recipe = data.find((r) => r.id === parseInt(id) && r.slug === slug);

  if (!recipe) {
    return (
      <Container>
        <h1>Recept niet gevonden</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Link to="/">← Terug naar home</Link>
      <section className="recipe-detail">
        <div>
          <PageTitle>{recipe.name}</PageTitle>
          <Subtitle level={2}>Ingrediënten</Subtitle>
          <Grid size="small">
            {recipe.ingredients.map(({ amount, name, unit }, index) => (
              <li key={index}>
                {amount}
                {unit} {name}
              </li>
            ))}
          </Grid>
          <Subtitle level={2}>Instructies</Subtitle>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <img src={recipe.image} className="recipe-image" alt={recipe.name} />
      </section>
    </Container>
  );
};

export default RecipeDetail;
