"use client";
import {Provider} from "react-redux";
import {store} from ".";
import React, {useEffect} from "react";
import {setFavoritePokemons} from "./pokemons/pokemonSlice";
import {setInitTheme} from "./ui/uiDarkModeSlice";

interface Props {
	children: React.ReactNode;
}

export const Providers = ({children}: Props) => {
	useEffect(() => {
		const favorites = JSON.parse(
			localStorage.getItem("favorite-pokemons") ?? "{}"
		);

		const theme = localStorage.getItem("theme") as "light" | "dark" | null;

		store.dispatch(setFavoritePokemons(favorites));
		store.dispatch(setInitTheme({darkMode: theme}));
	}, []);

	return <Provider store={store}>{children}</Provider>;
};
