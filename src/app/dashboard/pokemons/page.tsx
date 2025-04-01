import {PokemonGrid} from "@/app/pokemons/components/PokemonGrid";
import React from "react";

const PokemonPage = async () => {
	return (
		<div className="flex flex-col gap-3 bg-yellow-400  ml-4  w-full">
			<span className="text-xl font-semibold">
				Listado de Pokémons <small className="text-gray-500">estático</small>{" "}
			</span>
			<PokemonGrid />
		</div>
	);
};

export default PokemonPage;
