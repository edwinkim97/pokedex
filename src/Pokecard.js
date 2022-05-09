import { pokemonApiBaseUrl } from "./config";
import "./Pokecard.css";

function Pokecard( { id, name, type, baseExperience } ) {
  const image = `${pokemonApiBaseUrl}${id}.png`;
  const altName = `image of ${name}`;
  const pokeCardClass = `Pokecard type-${type}`;

  return ( <div className={pokeCardClass}>
    <h1>{name}</h1>
    <img src={image} alt={altName}></img>
    <p>Type: {type}</p>
    <p>EXP: {baseExperience}</p>
  </div> );
}

export default Pokecard;