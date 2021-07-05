import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import PokemonStats from "./stats/PokemonStats";
import PokemonTypes from "./stats/PokemonTypes";

const PokemonScreen = ({ history }) => {
  const typeColors = {
    electric: "#FFEA70",
    normal: "#B09398",
    fire: "#FF675C",
    water: "#0596C7",
    ice: "#AFEAFD",
    rock: "#999799",
    flying: "#7AE7C7",
    grass: "#4A9681",
    psychic: "#FFC6D9",
    ghost: "#561D25",
    bug: "#A2FAA3",
    poison: "#795663",
    ground: "#D2B074",
    dragon: "#DA627D",
    steel: "#1D8A99",
    fighting: "#2F2F2F",
    default: "#2A1A1F",
  };

  const { pokemonId } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  const { data, loading } = useFetch(url);

  if (!loading) {
    console.log(typeColors[data.types[0].type.name]);
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  // const colorShadow = typeColors[data.types.type.name]

  // const color = `0 3px 15px rgba(${colorShadow}, ${colorShadow}, ${colorShadow}, 0.5)`;
  // style={{boxShadow:color}}

  return (
    <div className="screen-card">
      {loading ? (
        <div className="loading-screen animate__animated animate__fadeIn">
          <p> cargando...</p>
          <img
            src="https://media4.giphy.com/media/jQbinPsqqfg8GFxbQw/giphy.gif?cid=ecf05e47fieucjmpv05w46k2xcdcnyv6ldysxko32ezqj6k5&rid=giphy.gif&ct=s"
            alt="pokebola"
          />
        </div>
      ) : (
        <div className="screen-container">
          <div className="screen-img">
            <img
              src={`${data.sprites.other.dream_world.front_default}`}
              style={{
                filter: `drop-shadow(1px 1px 25px ${
                  typeColors[data.types[0].type.name]
                })`,
              }}
              alt={data.name}
            />
          </div>
          <div className="screen-body">
            <div className="screen-id border">
              <p>{`#${data.id}`}</p>
            </div>
            <div className="screen-name border">
              <p>{data.name}</p>
            </div>
            <div className="screen-types border">
              {data.types.map((type) => (
                <PokemonTypes key={type.type.name} type={type} />
              ))}
            </div>
            <div className="screen-stats border">
              {data.stats.map((stat) => (
                <PokemonStats key={stat.stat.name} stat={stat} />
              ))}
            </div>
            <button className="screen-btn border" onClick={handleReturn}>
              {" "}
              return{" "}
            </button>
          </div>
        </div>
      )}

      {/* <img src={`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${name}.gif`} alt="asd" /> */}
    </div>
  );
};

export default PokemonScreen;
