import {SimplePokemon} from "@/app/pokemons";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PokemonsState {
	favorites: {
		[key: string]: SimplePokemon;
	};
}

//Las funciones que inicializan nuestro estado
//pasan antes por servidor con un valor y luego se procesa en el client
//con otro valor, esto causa problemas de hidratación o comportamientos inesperados
// const getInitialStateLocalStorage = (): PokemonsState => {
// 	if (typeof localStorage === "undefined") return {favorites: {}};

// 	const favorite = JSON.parse(
// 		localStorage.getItem("favorite-pokemons") ?? "{}"
// 	);

// 	return favorite;
// };

const initialState: PokemonsState = {
	favorites: {
		...{"1": {id: "1", name: "bulbasaur"}},
		// ...getInitialStateLocalStorage().favorites,
	},
};

const pokemonsSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		setFavoritePokemons(
			state,
			action: PayloadAction<{
				[key: string]: SimplePokemon;
			}>
		) {
			state.favorites = action.payload;
		},
		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			const {id} = pokemon;

			if (state.favorites[id]) {
				delete state.favorites[id];
			} else {
				state.favorites[id] = pokemon;
			}

			localStorage.setItem(
				"favorite-pokemons",
				JSON.stringify(state.favorites)
			);
		},
	},
});

export const {toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
