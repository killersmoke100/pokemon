import { graphqlClient } from '@/lib/graphql/graphqlClient';
import { GET_MULTIPLE_POKEMON_BY_LIMIT_OFFSET } from '@/lib/graphql/queries/pokemonMultipleByLimitOffset';
import { GET_POKEMON_DESCRIPTION } from '@/lib/graphql/queries/pokemonDetails';
import { GET_POKEMON_BY_NAME } from '@/lib/graphql/queries/pokemonByName';
import { PokemonResponse, Pokemon, PokemonDescriptionResponse, PokemonDescription} from '@/types/types';

export async function fetchMultiplePokemon(limit: number, page_number: number): Promise<Pokemon[]> {
  const offset = (page_number - 1) * limit;
  const variables = { limit, offset };
  
  const response = await fetchGraphQLData<PokemonResponse>(GET_MULTIPLE_POKEMON_BY_LIMIT_OFFSET, variables);
  if (response instanceof Error) { 
    throw response;
  }
  return response.pokemon_v2_pokemon;
}

export async function fetchDescription(id: number): Promise<PokemonDescription> {
  const variables = { id };
  const response = await fetchGraphQLData<PokemonDescriptionResponse>(GET_POKEMON_DESCRIPTION, variables);

  if (response instanceof Error) { 
    throw response;
  }
  return response.pokemon_v2_pokemon[0];
}
  
export async function fetchSinglePokemon(name: string): Promise<Pokemon[]> {
  const variables = { name };
  
  const response = await fetchGraphQLData<PokemonDescriptionResponse>(GET_POKEMON_BY_NAME, variables);
  if (response instanceof Error) { 
    throw response;
  }
  return response.pokemon_v2_pokemon;
}

async function fetchGraphQLData<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<T | Error> {
  try {
    return await graphqlClient.request<T>(query, variables);
  } catch (error) {
    if (error instanceof Error) {
      return new Error("GraphQL request failed: " + error.message);
    }
    return new Error("GraphQL request failed: Unknown error");
  }
}