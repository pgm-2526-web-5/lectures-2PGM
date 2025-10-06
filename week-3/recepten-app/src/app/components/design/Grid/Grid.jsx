import "./Grid.css";

const Grid = ({ children, as = "ul", size = "default" }) => {
  const Tag = as;
  return <Tag className={`grid grid--${size}`}>{children}</Tag>;
};

export default Grid;
