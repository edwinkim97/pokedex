import Pokedex from "./Pokedex";
import _ from 'lodash';
import { useState } from "react";
import { Container, Row, Button } from "reactstrap";

function Pokegame({ pokemon }) {
    const [shuffledPokemon, setShuffledPokemon] = useState(pokemon);

    const deck1 = shuffledPokemon.slice(0, 4);
    const deck2 = shuffledPokemon.slice(4, 8);

    const deck1Score = deck1.reduce(
        (totalExp, pokemon) => totalExp + pokemon.base_experience,
        0
    );

    const deck2Score = deck2.reduce(
        (totalExp, pokemon) => totalExp + pokemon.base_experience,
        0
    );

    const deck1Wins = deck1Score > deck2Score;
    const deck2Wins = deck2Score > deck1Score;

    function handleSubmit(e) {
        e.preventDefault();
        setShuffledPokemon(_.shuffle(pokemon));
    };

    return (
        <Container>
            <Row className="text-center mt-3 mb-3">
                <div className="header">
                    <h1>Welcome to the Pokémon Game!</h1>
                    <p>This is a simple card game that sums up the total exp of
                        your hand to determine the winning hand!</p>
                    <p>Click the pokéball to start!</p>
                </div>
            </Row>

            <Row>
                <Pokedex pokemon={deck1} isWinner={deck1Wins} totalExp={deck1Score} />
            </Row>

            <Button onClick={handleSubmit} className="btn-sm mx-auto d-block p-1">
                <img className="button-image" src="pokeball.png" alt="pokeball"></img>
            </Button>

            <Row>
                <Pokedex pokemon={deck2} isWinner={deck2Wins} totalExp={deck2Score} />
            </Row>
        </Container>
    );
}

export default Pokegame;