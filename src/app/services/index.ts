import {Pokemon, SimplePokemon} from "../pokemons";

/**
 * Fetches a list of Pokémon from the PokéAPI.
 *
 * @param {number} [limit=20] - The number of Pokémon to fetch.
 * @param {number} [offset=0] - The offset for pagination.
 * @returns {Promise<SimplePokemon[]>} A promise that resolves to an array of simplified Pokémon objects.
 * @throws {Error} If there is an error fetching the Pokémon data.
 */
export const getPokemons = async (
	limit = 20,
	offset = 0
): Promise<SimplePokemon[]> => {
	const data: Pokemon = await fetch(
		"https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
	)
		.then((res) => res.json())
		.catch((error) => {
			throw new Error("Error fetching pokemons: ", error);
		});

	const pokemons = data.results.map((pokemon: {url: string; name: string}) => ({
		id: pokemon.url.split("/")[6],
		name: pokemon.name,
	}));
	// throw new Error("Error fetching pokemons");
	return pokemons;
};
