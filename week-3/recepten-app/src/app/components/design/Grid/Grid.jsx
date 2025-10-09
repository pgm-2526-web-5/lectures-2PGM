import PropTypes from "prop-types";
import "./Grid.css";

const Grid = ({ children, as = "ul", size = "default" }) => {
  const Tag = as;
  return <Tag className={`grid grid--${size}`}>{children}</Tag>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(["default", "small", "large"]),
};

export default Grid;
