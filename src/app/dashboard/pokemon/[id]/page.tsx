import {Pokemon} from "@/app/pokemons/interfaces/pokemon";
import {Metadata} from "next";
import React from "react";

interface Props {
	params: {id: string};
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
	const {id, name} = await getPokemon(params.id);

	return {
		title: `Pokemon ${name}`,
		description: `Pokemon ${id} page`,
	};
}

const getPokemon = async (id: string): Promise<Pokemon> => {
	const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		cache: "no-cache",
	});

	return pokemon
		.json()
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
};

export default async function PokemonPage(props: Props) {
	const {params} = props;
	const {id} = params;

	const pokemonResponse = await getPokemon(id);

	return (
		<div>
			<h1>Pokemon Page {pokemonResponse.name ?? "not found"} </h1>
		</div>
	);
}
