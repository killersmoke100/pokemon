import { useState, useEffect } from "react";
import { fetchDescription } from "@/lib/api/apiInterface"; 
import { ReducedPokemonDescription} from "@/types/types";
import { stringIdToNumber } from '@/lib/api/apiUtils';
import { reducePokemonDescription } from '@/lib/api/apiReducers';

interface PokemonDescData {
  pokemonDescription: ReducedPokemonDescription | null;
  loading: boolean;
  error: string | null;
}
  
export function loadPokemonDesc(id: string): PokemonDescData {
  const [pokemonDescription, setPokemonDescription] = useState<ReducedPokemonDescription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

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

  return { pokemonDescription, loading, error };
}