import Container from "@design/Container/Container";
import "./Header.css";
import { Link, NavLink } from "react-router";
import Logo from "@design/Logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <Link className="header__logo" to="/">
          <Logo />
        </Link>
        <ul className="header__nav">
          <li className="header__nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => "header__link " + (isActive ? "header__link--active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/over"
              className={({ isActive }) => "header__link " + (isActive ? "header__link--active" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
