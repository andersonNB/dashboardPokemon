import Image from "next/image";
import Link from "next/link";
import React from "react";
import {SimplePokemon} from "../interfaces/simple-pokemon";
import {IoHeartOutline} from "react-icons/io5";

export const PokemonCard = ({pokemon}: {pokemon: SimplePokemon}) => {
	return (
		<div className="mx-auto right-0 mt-2 w-60">
			<div className="bg-white rounded overflow-hidden shadow-lg">
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
					<Link href="/account/campaigns">
						<div className="px-4 py-2 hover:bg-gray-100 flex items-center">
							<div className="text-green-600">
								<IoHeartOutline color="red" />
							</div>
							<div className="pl-3">
								<p className="text-sm font-medium text-gray-800 leading-none">
									No es favorito
								</p>
								<p className="text-xs text-gray-500">View your campaigns</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
