"use client";
import { useParams } from 'next/navigation'; 
import Link from 'next/link';
import { loadPokemonDesc } from "@/hooks/loadPokemonDesc";

export default function PokemonDescription() {
  const { id } = useParams<{ id: string }>();
  const { pokemonDescription, loading, error } = loadPokemonDesc(id);
  

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <h1>Pokemon</h1>
        <p>{pokemonDescription?.id} - {pokemonDescription?.name}-{pokemonDescription?.height} - {pokemonDescription?.weight} - {pokemonDescription?.genders}</p>
        <p>{pokemonDescription?.description} - {pokemonDescription?.types} - {pokemonDescription?.category} - {pokemonDescription?.weaknesses}</p>
        <img
          src={pokemonDescription?.sprite}
          width={50} 
          height={50}
          alt={`${pokemonDescription?.name} sprite`}
        />
        {Object.entries(pokemonDescription?.abilities_and_effects || {}).map(([ability, effect]) => (
          <li key={ability}>
            <strong>{ability}:</strong> {effect}
          </li>
        ))}
        {Object.entries(pokemonDescription?.stats || {}).map(([name, value]) => (
          <li key={name}>
            <strong>{name}:</strong> {value}
          </li>
        ))}
      </div>
      
      <div>
        <Link href="/">Go back to Home</Link>
      </div>

    </div>
  );
}