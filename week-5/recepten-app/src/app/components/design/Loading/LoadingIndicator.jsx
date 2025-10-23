import { useEffect, useState } from "react";
import "./LoadingIndicator.css";
import { FiRefreshCcw } from "react-icons/fi";
import PropTypes from "prop-types";

/*
 * LoadingIndicator that displays a loading icon after 1000ms to avoid flickering
 */
const LoadingIndicator = ({ className = "", message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <span className={`loading-indicator ${className}`}>
      <span className={`loading-indicator__icon`}>
        <FiRefreshCcw />
      </span>
      {message && <p className="loading-indicator__message">{message}</p>}
    </span>
  );
};

LoadingIndicator.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};

export default LoadingIndicator;
