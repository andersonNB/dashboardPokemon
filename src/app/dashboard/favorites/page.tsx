"use client";
import {SimplePokemon} from "@/app/pokemons";
import {PokemonGrid} from "@/app/pokemons/components/PokemonGrid";
import {useAppSelector} from "@/app/store";
import {useEffect, useState} from "react";
import {IoHeartOutline} from "react-icons/io5";

const PokemonPage = () => {
	const pokemonsStore = useAppSelector((state) => state.pokemons.favorites);

	const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);

	useEffect(() => {
		const favoritePokemons = Object.values(pokemonsStore);
		setPokemons(favoritePokemons ?? []);
	}, [pokemonsStore]);

	function showContent() {
		if (pokemons.length === 0) return <NoFavorites />;
		if (pokemons.length > 0) {
			return <PokemonGrid pokemons={pokemons} />;
		}

		return "Cargando...";
	}

	return (
		<div className="flex flex-col gap-3 bg-yellow-400  ml-4  w-full">
			<span className="text-xl font-semibold">
				Pokémons Favoritos <small className="text-gray-500">Global state</small>{" "}
			</span>
			{/* {pokemons?.length ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />} */}
			{showContent()}
		</div>
	);
};

export default PokemonPage;

export const NoFavorites = () => {
	return (
		<div className="flex flex-col h-[50vh] items-center justify-center ">
			<IoHeartOutline size={100} className="text-red-500" />
			<span className="text-lg">Aún no hay favoritos</span>
		</div>
	);
};
