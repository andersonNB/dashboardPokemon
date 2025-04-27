import {PokemonGrid} from "@/app/pokemons/components/PokemonGrid";
import {getPokemons} from "@/app/services";
import React from "react";

const PokemonPage = async () => {
	const pokemons = await getPokemons(Math.random() * 5, 0);
	return (
		<div className="flex flex-col gap-3 bg-yellow-400  ml-4  w-full">
			<span className="text-xl font-semibold">
				Listado de Pokémons <small className="text-gray-500">estático</small>{" "}
			</span>
			<PokemonGrid pokemons={pokemons} />
		</div>
	);
};

export default PokemonPage;
