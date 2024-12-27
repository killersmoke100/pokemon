import { useState, useEffect } from "react";
import { fetchPokemon } from "@/lib/api/apiInterface"; 
import { ReducedPokemon } from "@/types/types";
import { reducePokemonData } from "@/lib/api/apiReducers";


interface PokemonData {
  pokemonDetails: ReducedPokemon[];
  loading: boolean;
  error: string | null;
}
  
export function loadPokemonData(currentPage: number): PokemonData {
  const [pokemonDetails, setPokemonDetails] = useState<ReducedPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const cleanPokemonData = reducePokemonData(await fetchPokemon(12, currentPage));
        setPokemonDetails(cleanPokemonData); 
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
    }, [currentPage]);

    return { pokemonDetails, loading, error };
}