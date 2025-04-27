import {PokemonGrid} from "@/app/pokemons/components/PokemonGrid";
import React from "react";

export const metadata = {
	title: "Favoritos",
	description: "Section Favorites",
};

const PokemonPage = async () => {
	return (
		<div className="flex flex-col gap-3 bg-yellow-400  ml-4  w-full">
			<span className="text-xl font-semibold">
				Pokémons Favoritos <small className="text-gray-500">Global state</small>{" "}
			</span>
			<PokemonGrid pokemons={[]} />
		</div>
	);
};

export default PokemonPage;
