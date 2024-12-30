import { Pokemon, ReducedPokemon, PokemonDescription, ReducedPokemonDescription, PokemonV2Pokemontype, PokemonV2Pokemonability, PokemonV2Pokemonstat} from '@/types/types';
import { interpretGenderRate, capitaliseFirstLetter, convertDecigramsToKilograms, convertDecimetersToMeters } from '@/lib/api/apiUtils';

export function reducePokemonDescription(pokemonDescription: PokemonDescription): ReducedPokemonDescription {
  return {
    id: pokemonDescription.id ?? -1,
    name: capitaliseFirstLetter(pokemonDescription.name) ?? "Name Unavaliable",
    height: convertDecimetersToMeters(pokemonDescription.height) ?? -1,
    weight: convertDecigramsToKilograms(pokemonDescription.weight) ?? -1,
    category: pokemonDescription.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesnames[0].genus ?? "Category Unavaliable",
    genders: interpretGenderRate(pokemonDescription.pokemon_v2_pokemonspecy.gender_rate) ?? ["Genders Unavaliable"],
    description: (pokemonDescription.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text).replace('\f', ' ') ?? "Description Unavaliable",
    types: pokemonDescription.pokemon_v2_pokemontypes.map((pokemon_v2_type) => capitaliseFirstLetter(pokemon_v2_type.pokemon_v2_type.name)) ?? ["Types Unavaliable"],
    abilities_and_effects: reduceAbilitiesToAbilityAndEffects(pokemonDescription.pokemon_v2_pokemonabilities) ?? new Map<string, string>([["Abilities Unavaliable", "Effects Unavaliable"]]),
    stats: reduceStatsToNameAndBase(pokemonDescription.pokemon_v2_pokemonstats) ?? new Map<string, number>([["No Stat Avaliable", -1]]),
    weaknesses: reduceTypeEfficaciesToWeaknesses(pokemonDescription.pokemon_v2_pokemontypes) ?? ["Weaknesses Unavaliable"],
    sprite: pokemonDescription.pokemon_v2_pokemonsprites[0].sprites.front_default ?? "",
  };
}

function reduceTypeEfficaciesToWeaknesses(pokemonTypes: PokemonV2Pokemontype[]): string[] {
  const weaknesses = pokemonTypes.flatMap((type_data) => (
    type_data.pokemon_v2_type.pokemon_v2_typeefficacies.map((eff_data) => capitaliseFirstLetter(eff_data.pokemonV2TypeByTargetTypeId.name)))
  );
  return [...new Set(weaknesses)];
}

function reduceAbilitiesToAbilityAndEffects(abilities: PokemonV2Pokemonability[]): {[key: string]: string} {
  return Object.fromEntries(abilities.map((ability) => [
    capitaliseFirstLetter(ability.pokemon_v2_ability.name),
    ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].effect]));
}

function reduceStatsToNameAndBase(stats: PokemonV2Pokemonstat[]): {[key: string]: number} {
  return Object.fromEntries(stats.map((stat) => [
    stat.pokemon_v2_stat.name
    .replace(/-/g, ' ')
    .replace(/\bhp\b/i, 'HP')
    .replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1)),
    stat.base_stat])) 
}

export function reducePokemonData(pokemonData: Pokemon[]): ReducedPokemon[] {
  return pokemonData.map((pokemon) => ({
    id: pokemon.id ?? -1,
    name: capitaliseFirstLetter(pokemon.name) ?? "Name Unavaliable",
    types: pokemon.pokemon_v2_pokemontypes.map(type => capitaliseFirstLetter(type.pokemon_v2_type.name)) ?? ["Types Unavaliable"],
    sprite: pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default ?? "",
  }));
}
