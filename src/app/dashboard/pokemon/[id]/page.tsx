"use client";
import Image from "next/image";
import {notFound} from "next/navigation";
import React, {use, useEffect, useState} from "react";
import {Pokemon} from "@/app/pokemons/interfaces/pokemon";
import {FaArrowLeft} from "react-icons/fa";
import Link from "next/link";

interface Props {
	params: Promise<{id: string}>;
}

const getPokemon = async (id: string): Promise<Pokemon> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	console.log(res);
	if (!res.ok) notFound();
	return res.json();
};

// export async function generateStaticParams() {
// 	return [
// 		{id: "1"},
// 		{id: "2"},
// 		{id: "3"},
// 		{id: "4"},
// 		{id: "5"},
// 		{id: "6"},
// 		{id: "7"},
// 	];
// }

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

export default function PokemonPage({params}: Props) {
	const {id} = use(params);
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getPokemon(id);
				setPokemon(data);
			} catch (error) {
				// Si la API lanza un error, el `notFound()` ya maneja el redireccionamiento
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [id]);

	// if (!pokemon) return <Error />; -> esto es un error manual que se puede lanzar si no encuentra el pokémon, la cuestion era el estado incial salia por un segundo y luego mostraba el pokemon
	if (loading) {
		return (
			<div className="flex flex-col items-center justify-center h-screen w-full bg-[#1A2238] text-white">
				Cargando...
			</div>
		);
	}

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
						<div
							className="relative w-[150px] h-[150px]"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{isHovered ? (
								<video
									src="/videos/pokemon-demo.mp4"
									autoPlay
									loop
									muted
									className="w-[150px] h-[150px] object-contain opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
								/>
							) : (
								<Image
									src={pokemon?.sprites.other?.dream_world.front_default ?? ""}
									width={150}
									height={150}
									alt={`Imagen del pokemon ${pokemon?.name}`}
									className="mb-5"
								/>
							)}
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
}
