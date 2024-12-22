export const GET_POKEMON_DETAILS = `
query getPokemonDetails($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
        id
        name
        height
        weight
        pokemon_v2_pokemonspecy {
            gender_rate
            pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, limit: 1) {
                flavor_text
            }
        }
        pokemon_v2_pokemontypes {
            pokemon_v2_type {
                name
            }
        }
        pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
                name
                pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}) {
                    effect
                }
            }
        }
        pokemon_v2_pokemonstats {
            pokemon_v2_stat {
                name
            }
            base_stat
        }
        pokemon_v2_pokemonsprites {
            sprites
        }
    }
}
`;