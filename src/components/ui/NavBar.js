import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-logo">
        <Link className="nav-logo" to="/">
          <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" />
        </Link>
        </div>
        <div className="container-search">
        <NavLink
          activeClassName="active"
          className="nav-search"
          exact
          to="/search"
        >
          Search
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
