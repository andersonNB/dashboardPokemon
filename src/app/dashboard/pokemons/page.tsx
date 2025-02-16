import React from "react";

const getPokemons = async (limit = 20, offset = 0) => {
	const data = await fetch(
		"https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
	).then((res) => res.json());

	return data;
};

const PokemonPage = async () => {
	const pokemons = await getPokemons();

	return <div className="w-2">{JSON.stringify(pokemons)}</div>;
};

export default PokemonPage;
