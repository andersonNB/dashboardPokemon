import {Pokemon, SimplePokemon} from "@/app/pokemons";
import Image from "next/image";
import React from "react";

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

	return pokemons;
};

const PokemonPage = async () => {
	const pokemons = await getPokemons();

	console.log(pokemons);

	return (
		<div className="flex flex-col">
			<div className="flex flex-wrap gap-10 items-center justify-center"></div>
			{/* {pokemons.map((pokemon, index) => (
				<Image
					alt={pokemon?.name}
					src={pokemon.id}
					key={index}
					width={48}
					height={48}
				/>
			))} */}
		</div>
	);
};

export default PokemonPage;
