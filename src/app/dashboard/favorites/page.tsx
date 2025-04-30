"use client";
import {PokemonGrid} from "@/app/pokemons/components/PokemonGrid";
import {useAppSelector} from "@/app/store";

const PokemonPage = () => {
	const pokemonsState = useAppSelector((state) => state.pokemons);

	const favoritePokemons = Object.values(pokemonsState);
	return (
		<div className="flex flex-col gap-3 bg-yellow-400  ml-4  w-full">
			<span className="text-xl font-semibold">
				Pokémons Favoritos <small className="text-gray-500">Global state</small>{" "}
			</span>
			<PokemonGrid pokemons={favoritePokemons} />
		</div>
	);
};

export default PokemonPage;
