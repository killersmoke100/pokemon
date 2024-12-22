import { graphqlClient } from '@/lib/graphql/graphqlClient';
import { GET_POKEMON_BASIC_INFO } from '@/lib/graphql/queries/pokemonBasicInfo';
import { Pokemon, PokemonResponse, ReducedPokemon } from '../types/types';

export async function fetchPokemon(limit: number, page_number: number): Promise<ReducedPokemon[]> {
  const offset = (page_number - 1) * limit;
  const variables = { limit, offset };
  
  const data = await fetchPokemonData(variables);
  const pokemonData = data.pokemon_v2_pokemon;
  return reducePokemonData(pokemonData);
}

async function fetchPokemonData(variables: { limit: number, offset: number }): Promise<PokemonResponse> {
  try {
    return await graphqlClient.request<PokemonResponse>(GET_POKEMON_BASIC_INFO, variables);
  } catch (error) {
    throw new Error("Failed to fetch Pokémon data");
  }
}

function reducePokemonData(pokemonData: Pokemon[]): ReducedPokemon[] {
  return pokemonData.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.pokemon_v2_pokemontypes.map(type => type.pokemon_v2_type.name),
    sprite: pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites?.front_default || '',
  }));
}