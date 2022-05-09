import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex( { pokemon, isWinner, totalExp } ) {
  const pokedexClass = `Pokedex winner-${isWinner}`;
  return ( <div className={pokedexClass}>
    {pokemon.map(p => (<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} baseExperience={p.base_experience}/>))}
    <div className="p-2">
    <h1>{isWinner === true? "THIS HAND WINS!": "THIS HAND LOSES"}</h1>
    <p>Total Exp = {totalExp}</p>
    </div>
  </div> );
}

export default Pokedex;