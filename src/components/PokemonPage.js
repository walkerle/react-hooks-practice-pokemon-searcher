import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const baseUrl = 'http://localhost:3001/pokemon';

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(pokemonObj => setPokemon(pokemonObj))
  }, [])

  const pokemonToDisplay = pokemon.filter( onePokemon => {
    return onePokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  function addPokemon(pokemonObj) {
    console.log(addPokemon)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
