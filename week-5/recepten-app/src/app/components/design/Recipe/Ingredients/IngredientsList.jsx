import "./IngredientsList.css";
import Button from "@design/Button/Button";
import Grid from "@design/Grid/Grid";
import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa";

const IngredientsList = ({ persons, ingredients, onIncrease, onDecrease }) => {
  return (
    <div className="ingredients-list">
      <div className="ingredients-list__header">
        <span>
          {persons} {persons === 1 ? "person" : "persons"}
        </span>
        <Button size="small" color="secondary" onClick={onDecrease} icon={FaMinus}></Button>
        <Button size="small" color="secondary" onClick={onIncrease} icon={FaPlus}></Button>
      </div>

      <Grid size="small">
        {ingredients.map(({ amount, name, unit }, index) => (
          <li key={index}>
            {amount}
            {unit} {name}
          </li>
        ))}
      </Grid>
    </div>
  );
};

IngredientsList.propTypes = {
  persons: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default IngredientsList;
