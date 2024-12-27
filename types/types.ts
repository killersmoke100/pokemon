
export interface PokemonResponse {
    pokemon_v2_pokemon: Pokemon[]; 
}

export interface Pokemon {
    id: number;
    name: string;
    pokemon_v2_pokemontypes: BasicPokemonV2Pokemontype[];
    pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface ReducedPokemon {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}

export interface PokemonDescriptionResponse {
    pokemon_v2_pokemon: PokemonDescription[];
}

export interface PokemonDescription {
    id: number;
    name: string;
    height: number;
    weight: number;
    pokemon_v2_pokemonspecy: PokemonV2Pokemonspecy;
    pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
    pokemon_v2_pokemonabilities: PokemonV2Pokemonability[];
    pokemon_v2_pokemonstats: PokemonV2Pokemonstat[];
    pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface ReducedPokemonDescription {
    name: string;
    id: number;
    height: number;
    weight: number;
    category: string;
    genders: string[];
    description: string;
    types: string[];
    abilities_and_effects: { [key: string]: string };
    stats: { [key: string]: number };
    weaknesses: string[];
    sprite: string;
}

export interface PokemonV2Pokemonability {
    pokemon_v2_ability: PokemonV2Ability;
}

export interface PokemonV2Ability {
    name: string;
    pokemon_v2_abilityeffecttexts: PokemonV2Abilityeffecttext[];
}

export interface PokemonV2Abilityeffecttext {
    effect: string;
}

export interface PokemonV2Pokemonspecy {
    gender_rate: number;
    pokemon_v2_pokemonspeciesflavortexts: PokemonV2Pokemonspeciesflavortext[];
    pokemon_v2_pokemonspeciesnames: PokemonV2Pokemonspeciesname[];
}

export interface PokemonV2Pokemonspeciesflavortext {
    flavor_text: string;
}

export interface PokemonV2Pokemonspeciesname {
    genus: string;
}

export interface PokemonV2Pokemonsprite {
    sprites: Sprites;
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    platinum: Sprites;
    "diamond-pearl": Sprites;
    "heartgold-soulsilver": Sprites;
}

export interface Versions {
    "generation-i": GenerationI;
    "generation-v": GenerationV;
    "generation-ii": GenerationIi;
    "generation-iv": GenerationIv;
    "generation-vi": { [key: string]: Home };
    "generation-iii": GenerationIii;
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Other {
    home: Home;
    showdown: Sprites;
    dream_world: DreamWorld;
    "official-artwork": OfficialArtwork;
}

export interface Sprites {
    other?: Other;
    versions?: Versions;
    back_shiny: string;
    back_female: null;
    front_shiny: string;
    back_default: string;
    front_female: null;
    front_default: string;
    back_shiny_female: null;
    front_shiny_female: null;
    animated?: Sprites;
}

export interface GenerationI {
    yellow: RedBlue;
    "red-blue": RedBlue;
}

export interface RedBlue {
    back_gray: string;
    front_gray: string;
    back_default: string;
    front_default: string;
    back_transparent: string;
    front_transparent: string;
}

export interface GenerationIi {
    gold: Gold;
    silver: Gold;
    crystal: Crystal;
}

export interface Crystal {
    back_shiny: string;
    front_shiny: string;
    back_default: string;
    front_default: string;
    back_transparent: string;
    front_transparent: string;
    back_shiny_transparent: string;
    front_shiny_transparent:string;
}

export interface Gold {
    back_shiny: string;
    front_shiny: string;
    back_default: string;
    front_default: string;
    front_transparent?: string;
}

export interface GenerationIii {
    emerald: OfficialArtwork;
    "ruby-sapphire": Gold;
    "firered-leafgreen": Gold;
}

export interface OfficialArtwork {
    front_shiny: string;
    front_default: string;
}

export interface Home {
    front_shiny: string;
    front_female: null;
    front_default: string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons: DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_female: null;
    front_default: string;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface PokemonV2Pokemonstat {
    pokemon_v2_stat: PokemonV2;
    base_stat: number;
}

export interface PokemonV2 {
    name: string;
}

export interface BasicPokemonV2Pokemontype {
    pokemon_v2_type: PokemonV2;
}

export interface PokemonV2Pokemontype {
    pokemon_v2_type: PokemonV2Type;
}

export interface PokemonV2Type {
    name: string;
    pokemon_v2_typeefficacies: PokemonV2Typeefficacy[];
}
export interface PokemonV2Typeefficacy {
    damage_factor: number;
    pokemonV2TypeByTargetTypeId: PokemonV2;
}