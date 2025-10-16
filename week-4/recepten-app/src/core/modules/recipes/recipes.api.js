import API from "@core/networking/api";

export const fetchRecipes = () => {
  return API.get("/recepten/recipes.json").then(({ data }) => data);
};

export const fetchRecipe = (id) => {
  return API.get(`/recepten/recipes/${id}.json`).then(({ data }) => data);
};
