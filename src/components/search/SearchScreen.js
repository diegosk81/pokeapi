import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { searchPokemon } from "../../api/api";
import PokemonCard from "../pokemons/PokemonCard";

const SearchScreen = ({ history }) => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const initialForm = {
    search: q,
  };
  const [formValues, handleInputChange] = useForm(initialForm);

  const { search } = formValues;

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      setPokemonsData([]);
      setSearching(false);
      setNotFound(false);
      return;
    }
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setSearching(false);
      return;
    } else {
      setPokemonsData([result]);
    }
    setSearching(false);
  };

  if (search === 0) {
    onSearch(null);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
    onSearch(search);
  };
  console.log(pokemonsData);
  return (
    <div className="search-card">
      <div className="search-col1">
        <h4>Search your Pokemon</h4>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Find your pokemon"
            autoComplete="off"
            className="form-control"
            value={search}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="search-btn"
            // onClick={handleSearch}
          >
            Search...
          </button>
        </form>
      </div>
      <div className="search-col2">
        {searching ? (
          <div className="loading-search animate__animated animate__fadeIn">
            <p>buscando.....</p>
            <img
              src="https://media.tenor.com/images/e99275335170a0f5eb2a5cb38c7cc260/tenor.gif"
              alt="buscando"
            />
          </div>
        ) : notFound ? (
          <div className="loading-not-found animate__animated animate__fadeIn">
            <p>pokemon no encontrado</p>
            <img
              src="https://media.tenor.com/images/b8134ffb1d8a1ede49c5806c2e2de868/tenor.gif"
              alt="no found"
            />
          </div>
        ) : pokemonsData.length === 0 ? (
          <div className="loading-not-search animate__animated animate__fadeIn">
            <p>sin pokemones</p>
            <img
              src="https://media.tenor.com/images/131d9afc4ebdd550e4ad84e325018780/tenor.gif"
              alt="sin datos"
            />
          </div>
        ) : (
          pokemonsData.map((poke) => <PokemonCard key={poke.id} {...poke} />)
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
