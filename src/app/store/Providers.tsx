"use client";
import {Provider, useDispatch} from "react-redux";
import {store} from ".";
import React, {useEffect} from "react";
import {setFavoritePokemons} from "./pokemons/pokemonSlice";
import {useRouter} from "next/navigation";

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
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const favorites = JSON.parse(
				localStorage.getItem("favorite-pokemons") ?? "{}"
			);
			dispatch(setFavoritePokemons(favorites));
			const tabsLocalStorage = localStorage.getItem("tabs");
			if (tabsLocalStorage) {
				const cleanPath = tabsLocalStorage.replace(/^"+|"+$/g, "");
				router.push(cleanPath);
			}
		}
	}, [dispatch]);

	return <>{children}</>;
};
