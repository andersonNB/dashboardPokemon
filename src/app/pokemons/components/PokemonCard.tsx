"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {SimplePokemon} from "../interfaces/simple-pokemon";
import {IoHeart, IoHeartOutline} from "react-icons/io5";
import {useAppSelector} from "@/app/store";
import {useDispatch} from "react-redux";
import {toggleFavorite} from "@/app/store/pokemons/pokemonSlice";

export const PokemonCard = ({
	pokemon,
	index = 1,
}: {
	pokemon: SimplePokemon;
	index?: number;
}) => {
	const isFavorite = useAppSelector(
		(state) => !!state.pokemons.favorites[pokemon?.id]
	);

	const dispatch = useDispatch();

	return (
		<div className="mx-auto right-0 mt-2 w-60">
			<div className="bg-white rounded overflow-hidden shadow-lg">
				<div className="bg-gray-800 text-white pl-2 pt-2 w-full">
					<div className="bg-white text-black w-[26px] rounded-full h-[26px] text-center ">
						{index + 1}
					</div>
				</div>
				<div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
					{/* priority false hace que la imagen sea cargada bajo demanda */}
					<Image
						alt={pokemon?.name}
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
						width={100}
						height={100}
						priority={false}
					/>

					<p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
						{pokemon?.name}
					</p>
					<div className="mt-5">
						<Link
							href={`/dashboard/pokemon/${pokemon.id}`}
							className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
						>
							{" "}
							Más información{" "}
						</Link>
					</div>
				</div>
				<div className="border-b">
					<div className="px-4 py-2 hover:bg-gray-100 flex items-center">
						<button
							onClick={() => dispatch(toggleFavorite(pokemon))}
							className="focus:outline-none"
						>
							{isFavorite ? (
								<IoHeart color="red" />
							) : (
								<IoHeartOutline color="red" />
							)}
						</button>
						<div className="pl-3">
							<p className="text-sm font-medium text-gray-800 leading-none">
								{isFavorite ? "Es favorito" : "No es favorito"}
							</p>
							<p className="text-xs text-gray-500">View your campaigns</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
