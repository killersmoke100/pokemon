export const GET_MULTIPLE_POKEMON_BY_LIMIT_OFFSET = `
query getPokemonBasicInfo($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
        id
        name
        pokemon_v2_pokemontypes {
            pokemon_v2_type {
                name
            }
        }
        pokemon_v2_pokemonsprites {
            sprites
        }
    }
}
`;