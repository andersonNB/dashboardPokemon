import {PokemonGrid} from "@/app/pokemons/components/PokemonGrid";
import {getPokemons} from "@/app/services";
import React from "react";

const PokemonPage = async () => {
	const pokemons = await getPokemons();
	return (
		<div className="flex flex-col gap-3 bg-yellow-400 w-full">
			<span className="text-xl font-semibold">
				Listado de Pokémons <small className="text-gray-500">estático</small>{" "}
			</span>
			<PokemonGrid pokemons={pokemons} />
		</div>
	);
};

export default PokemonPage;
