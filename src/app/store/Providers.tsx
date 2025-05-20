"use client";
import {Provider, useDispatch} from "react-redux";
import {store} from ".";
import React, {useEffect} from "react";
import {setFavoritePokemons} from "./pokemons/pokemonSlice";

interface Props {
	children: React.ReactNode;
}

export const Providers = ({children}: Props) => {
	return (
		<Provider store={store}>
			<InnerInitializer>{children}</InnerInitializer>
		</Provider>
	);
};

const InnerInitializer = ({children}: {children: React.ReactNode}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const favorites = JSON.parse(
				localStorage.getItem("favorite-pokemons") ?? "{}"
			);
			dispatch(setFavoritePokemons(favorites));
		}
	}, [dispatch]);

	return <>{children}</>;
};
