import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Loading from "./Loading";

const Home = (props) => {
  return (
    <div className="home">
      <Navbar />
      <Search
        showAllClick={props.showAllClick}
        pokemon={props.pokemon}
        setPokemon={props.setPokemon}
        searchPokemon={props.searchPokemon}
      />
    </div>
  );
};

export default Home;
