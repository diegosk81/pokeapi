import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "../components/pokemons/PokemonList";
import PokemonScreen from "../components/pokemons/PokemonScreen";
import SearchScreen from "../components/search/SearchScreen";
import NavBar from "../components/ui/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/pokemon/:pokemonId" component={PokemonScreen} />
          <Route path="/" component={PokemonList} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
