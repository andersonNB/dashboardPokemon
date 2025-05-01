import {SimplePokemon} from "@/app/pokemons";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PokemonsState {
	[key: string]: SimplePokemon;
}

const getInitialStateLocalStorage = (): PokemonsState => {
	const favorite = JSON.parse(
		localStorage.getItem("favorite-pokemons") ?? "{}"
	);

	return favorite;
};

const initialState: PokemonsState = {
	"1": {id: "1", name: "bulbasaur"},
	...getInitialStateLocalStorage(),
};

const pokemonsSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			const {id} = pokemon;

			if (state[id]) {
				delete state[id];
			} else {
				state[id] = pokemon;
			}

			localStorage.setItem("favorite-pokemons", JSON.stringify(state));
		},
	},
});

export const {toggleFavorite} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
