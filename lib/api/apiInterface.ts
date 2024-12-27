import { graphqlClient } from '@/lib/graphql/graphqlClient';
import { GET_POKEMON_BASIC_INFO } from '@/lib/graphql/queries/pokemonBasicInfo';
import { GET_POKEMON_DESCRIPTION } from '@/lib/graphql/queries/pokemonDetails';
import { PokemonResponse, Pokemon, PokemonDescriptionResponse, PokemonDescription} from '@/types/types';


export async function fetchPokemon(limit: number, page_number: number): Promise<Pokemon[]> {
  const offset = (page_number - 1) * limit;
  const variables = { limit, offset };
  
  const response = await fetchPokemonData(variables);
  if (response instanceof Error) { 
    throw response;
  }
  return response.pokemon_v2_pokemon;
}

async function fetchPokemonData(variables: { limit: number, offset: number }): Promise<PokemonResponse | Error>{
  try {
    return await graphqlClient.request<PokemonResponse>(GET_POKEMON_BASIC_INFO, variables);
  } catch (error) {
    if (error instanceof Error) {
      return new Error("GraphQL request failed: " + error.message);
    }
    return new Error("GraphQL request failed: Unknown error");
  }
}

export async function fetchDescription(id: number): Promise<PokemonDescription> {
  const variables = { id };
  const response = await fetchPokemonDescription(variables);

  if (response instanceof Error) { 
    throw response;
  }
  return response.pokemon_v2_pokemon[0];
}

async function fetchPokemonDescription(variables: { id: number }): Promise<PokemonDescriptionResponse | Error>{
  try {
    return await graphqlClient.request(GET_POKEMON_DESCRIPTION, variables);
  } catch (error) {
    if (error instanceof Error) {
      return new Error("GraphQL request failed: " + error.message);
    }
    return new Error("GraphQL request failed: Unknown error");
  }
}
  