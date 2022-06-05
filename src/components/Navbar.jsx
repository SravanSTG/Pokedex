import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/pokeball.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="pokeball-brand" src={logo} alt="pokeball"></img>
      <h1 className="pokedex-name">
        <Link to="/">Pokédex</Link>
      </h1>
    </div>
  );
};

export default Navbar;
