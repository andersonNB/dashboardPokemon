"use client";
import Image from "next/image";
import {notFound} from "next/navigation";
import React, {use, useEffect, useState} from "react";
import {Pokemon} from "@/app/pokemons/interfaces/pokemon";
import {FaArrowLeft} from "react-icons/fa";
import Link from "next/link";
import notFoundImagen from "../../../../../public/img/page not found.png";
import {IoHeart, IoHeartOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {toggleFavorite} from "@/app/store/pokemons/pokemonSlice";
import {useAppSelector} from "@/app/store";

interface Props {
	params: Promise<{id: string}>;
}

const getPokemon = async (id: string): Promise<Pokemon> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
	const dispatch = useDispatch();

	const isFavorite = useAppSelector(
		(state) => !!state.pokemons.favorites[pokemon?.id ?? ""]
	);

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
		<div className="flex mt-5 flex-col items-center text-slate-800 w-full">
			<div className="flex flex-col items-center rounded-[20px] w-[700px] mx-auto dark:bg-white dark:text-black shadow-lg p-3 gap-2 bg-[#1A2238] text-white">
				<div className="flex justify-between w-full">
					<div className="flex items-center">
						<h1 className="px-2 text-xl font-bold capitalize">
							#{pokemon?.id} {pokemon?.name}
						</h1>
						<div
							className="flex flex-col items-end ml-0.5 cursor-pointer "
							onClick={() => pokemon && dispatch(toggleFavorite(pokemon))}
						>
							{isFavorite ? (
								<IoHeart color="red" size={40} />
							) : (
								<IoHeartOutline color="red" size={40} />
							)}
						</div>
					</div>
					<Link href="/dashboard/pokemons">
						<p className=" capitalize  flex items-center gap-2 ">
							<FaArrowLeft />
							Regresar
						</p>
					</Link>
				</div>

				<div className="flex items-center w-full gap-0.5 justify-center h-[160px] ">
					<div
						className="flex items-center justify-center  h-full"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						{isHovered ? (
							<video
								src="/videos/pokemon-demo.mp4"
								autoPlay
								loop
								muted
								className="w-[100px] h-[100px] object-contain opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
							/>
						) : (
							<Image
								src={
									pokemon?.sprites.other?.dream_world.front_default ??
									notFoundImagen
								}
								alt={`Imagen del pokemon ${pokemon?.name}`}
								width={100}
								height={100}
								className="object-contain"
							/>
						)}
					</div>
				</div>

				<div className="flex flex-wrap">
					{pokemon?.moves.map((move) => (
						<p key={move.move.name} className="mr-2 capitalize">
							{move.move.name}
						</p>
					))}
				</div>

				<div className="grid grid-cols-2 gap-4 px-2 w-full text-black">
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
