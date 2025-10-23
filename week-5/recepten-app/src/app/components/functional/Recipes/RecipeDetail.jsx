import { useState } from "react";
import PageTitle from "@design/Typography/PageTitle";
import Subtitle from "@design/Typography/Subtitle";
import IngredientsList from "@design/Recipe/Ingredients/IngredientsList";
import StepList from "@design/Step/StepList";
import Grid from "@design/Grid/Grid";

const RecipeDetail = ({ recipe }) => {
  let { ingredients, persons: originalPersons, image, steps } = recipe;
  const [persons, setPersons] = useState(originalPersons);

  const handleDecrease = () => setPersons(Math.max(1, persons - 1));
  const handleIncrease = () => setPersons(persons + 1);

  ingredients = recipe.ingredients.map((ingredient) => ({
    ...ingredient,
    amount: Math.ceil(((ingredient.amount || 0) / originalPersons) * persons),
  }));

  return (
    <Grid as="section">
      <div>
        <PageTitle>{name}</PageTitle>
        <Subtitle level={2}>Ingrediënten</Subtitle>
        <IngredientsList
          persons={persons}
          ingredients={ingredients}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
        <Subtitle level={2}>Instructies</Subtitle>
        <StepList steps={steps} />
      </div>
      <img src={image} alt={name} />
    </Grid>
  );
};

export default RecipeDetail;
