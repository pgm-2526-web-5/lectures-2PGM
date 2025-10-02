import classes from "./ButtonWithModule.module.css";

const ButtonWithModule = ({ children }) => {
  return <button className={classes.btn}>{children}</button>;
};

export default ButtonWithModule;
