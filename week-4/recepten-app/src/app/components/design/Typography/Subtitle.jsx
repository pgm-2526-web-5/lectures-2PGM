import PropTypes from "prop-types";
import "./Subtitle.css";

const Subtitle = ({ children, className = "", level = 1, color = "default" }) => {
  // e.g. level = 2 -> Tag = 'h2'
  const Tag = `h${level}`;
  return <Tag className={`subtitle subtitle--${color} ${className}`}>{children}</Tag>;
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  color: PropTypes.oneOf(["default", "muted"]),
};

export default Subtitle;
