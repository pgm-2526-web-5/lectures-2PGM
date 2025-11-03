import { Link } from "react-router";
import "./Button.css";
import PropTypes from "prop-types";
import isEmptyText from "@core/utils/isEmptyText";

const Button = ({
  icon: Icon,
  children,
  to,
  className = "",
  color = "primary",
  disabled = false,
  size = "default",
  onClick,
  type = "button",
  ["aria-label"]: ariaLabel,
}) => {
  className = `button button--${color} button--size-${size} ${className}`;

  if (!isEmptyText(to)) {
    return (
      <Link className={className} to={to} disabled={disabled} aria-label={ariaLabel}>
        {Icon && <Icon />}
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled} type={type} aria-label={ariaLabel}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ["aria-label"]: PropTypes.string,
  size: PropTypes.oneOf(["default", "small", "large"]),
  icon: PropTypes.elementType,
  to: PropTypes.string,
};

export default Button;
