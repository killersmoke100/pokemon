"use client";
import { useState, useEffect } from "react";
import { fetchDescription } from "@/lib/api/apiInterface"; 
import { ReducedPokemonDescription} from "@/types/types";
import { useParams } from 'next/navigation'; 
import Link from 'next/link';
import { stringIdToNumber } from '@/lib/api/apiUtils';
import { reducePokemonDescription } from '@/lib/api/apiReducers';

export default function PokemonDescription() {
  const [pokemonDescription, setPokemonDescription] = useState<ReducedPokemonDescription| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const cleanPokemonDescription = reducePokemonDescription(await fetchDescription(stringIdToNumber(id)));
        setPokemonDescription(cleanPokemonDescription); 
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    
    loadPokemon();
  }, []);

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