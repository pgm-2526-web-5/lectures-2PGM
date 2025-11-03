import IngredientsList from "./IngredientsList";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Elements/Recipe/IngredientsList",
  component: IngredientsList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    persons: 2,
    ingredients: [
      {
        name: "Ingredient 1",
        amount: 100,
        unit: "g",
      },
      {
        name: "Ingredient 2",
        amount: 200,
        unit: "ml",
      },
      {
        name: "Ingredient 3",
        amount: 1,
        unit: "piece",
      },
    ],
    onDecrease: () => alert("Decrease persons"),
    onIncrease: () => alert("Increase persons"),
  },
};
