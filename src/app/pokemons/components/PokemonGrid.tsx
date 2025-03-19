import React from "react";
import {SimplePokemon} from "../interfaces/simple-pokemon";
import {Pokemon} from "../interfaces/pokemons-response";
import {PokemonCard} from "./PokemonCard";

const getPokemons = async (
	limit = 20,
	offset = 0
): Promise<SimplePokemon[]> => {
	const data: Pokemon = await fetch(
		"https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
	).then((res) => res.json());

	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split("/")[6],
		name: pokemon.name,
	}));

	throw new Error("Error fetching pokemons");

	return pokemons;
};

export const PokemonGrid = async () => {
	const pokemons = await getPokemons(Math.random() * 150, 0);
	return (
		<div className="flex flex-wrap items-center gap-4">
			{pokemons.map((pokemon) => (
				<PokemonCard pokemon={pokemon} key={pokemon.id} />
			))}
		</div>
	);
};
