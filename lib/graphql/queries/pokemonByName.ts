export const GET_POKEMON_BY_NAME = `
query getPokemonByName($name: String!) {
    pokemon_v2_pokemon(where: {name: {_eq: $name}}) {
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