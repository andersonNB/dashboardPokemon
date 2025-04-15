import {Pokemon} from "@/app/pokemons/interfaces/pokemon";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import React from "react";
import {FaArrowLeft} from "react-icons/fa";

interface Props {
	params: Promise<{name: string}>;
}

export const metadata = {
	title: "Nombre del pokemon",
	description: "Descripcion del pokemon",
};

// generamos los params estaticos para la ruta dinamica, en tiempo de build
export async function generateStaticParams() {
	return [{name: "ditto"}, {name: "blastoise"}, {name: "metapod"}];
}

const getPokemon = async (name: string): Promise<Pokemon> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	console.log(res);
	if (!res.ok) notFound();
	return res.json();
};

const InfoCard = ({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) => (
	<div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
		<p className="text-sm text-gray-600">{label}</p>
		<div className="text-base font-medium text-navy-700 flex">{children}</div>
	</div>
);

const SpritesSection = ({pokemon}: {pokemon: Pokemon}) => (
	<>
		<div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
			<p className="text-sm text-gray-600">Regular Sprites</p>
			<div className="flex justify-center">
				<Image
					src={pokemon.sprites.front_default ?? ""}
					width={100}
					height={100}
					alt={`sprite ${pokemon.name}`}
				/>
				<Image
					src={pokemon.sprites.back_default ?? ""}
					width={100}
					height={100}
					alt={`sprite ${pokemon.name}`}
				/>
			</div>
		</div>

		<div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
			<p className="text-sm text-gray-600">Shiny Sprites</p>
			<div className="flex justify-center">
				<Image
					src={pokemon.sprites.front_shiny ?? ""}
					width={100}
					height={100}
					alt={`sprite ${pokemon.name}`}
				/>
				<Image
					src={pokemon.sprites.back_shiny ?? ""}
					width={100}
					height={100}
					alt={`sprite ${pokemon.name}`}
				/>
			</div>
		</div>
	</>
);

const DetailPokemon = async ({params}: Props) => {
	const resolvedParams = await params;
	const pokemon = await getPokemon(resolvedParams?.name);

	return (
		<div className="flex mt-5 flex-col items-center text-slate-800">
			<div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white shadow-lg p-3">
				<div className="mt-2 mb-8 w-full  ">
					<div className="flex  items-center justify-between ">
						<h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
							#{pokemon?.id} {pokemon?.name}
						</h1>
						<Link href="/dashboard/pokemons">
							<p className="text-slate-700 capitalize  flex items-center gap-2 ">
								<FaArrowLeft />
								Regresar
							</p>
						</Link>
					</div>

					<div className="flex flex-col justify-center items-center">
						<div className="relative w-[150px] h-[150px]">
							<Image
								src={pokemon?.sprites.other?.dream_world.front_default ?? ""}
								width={150}
								height={150}
								alt={`Imagen del pokemon ${pokemon?.name}`}
								className="mb-5"
							/>
						</div>

						<div className="flex flex-wrap">
							{pokemon?.moves.map((move) => (
								<p key={move.move.name} className="mr-2 capitalize">
									{move.move.name}
								</p>
							))}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4 px-2 w-full">
					<InfoCard label="Types">
						{pokemon?.types.map((type) => (
							<p key={type.slot} className="mr-2 capitalize">
								{type.type.name}
							</p>
						))}
					</InfoCard>

					<InfoCard label="Peso">
						<span>{pokemon?.weight}</span>
					</InfoCard>

					{pokemon && <SpritesSection pokemon={pokemon} />}
				</div>
			</div>
		</div>
	);
};

export default DetailPokemon;
