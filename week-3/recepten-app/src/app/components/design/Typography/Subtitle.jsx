import "./Subtitle.css";

const Subtitle = ({ children, className = "", level = 1, color = "default" }) => {
  // e.g. level = 2 -> Tag = 'h2'
  const Tag = `h${level}`;
  return <Tag className={`subtitle subtitle--${color} ${className}`}>{children}</Tag>;
};

export default Subtitle;
