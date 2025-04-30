import React from "react";
import {SimplePokemon} from "../interfaces/simple-pokemon";
import {PokemonCard} from "./PokemonCard";

export const PokemonGrid = ({pokemons}: {pokemons: SimplePokemon[]}) => {
	return (
		<div className="flex flex-wrap items-center gap-4  justify-center ">
			{pokemons.map((pokemon) => (
				<PokemonCard pokemon={pokemon} key={pokemon.id} />
			))}
		</div>
	);
};
