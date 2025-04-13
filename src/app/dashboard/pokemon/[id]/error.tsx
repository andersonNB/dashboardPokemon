"use client";
import Link from "next/link";
import React from "react";

const Error = () => {
	return (
		<div className="flex  flex-col items-center justify-center h-screen w-full bg-[#1A2238] text-white">
			No se encontro el pokemon
			<Link
				href="/dashboard/pokemons"
				className="mt-5 relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
			>
				Ir a la pagina de pokemones
			</Link>
		</div>
	);
};

export default Error;
