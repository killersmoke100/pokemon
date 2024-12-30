import { useState, useEffect } from "react";
import { fetchPokemon, fetchSinglePokemon } from "@/lib/api/apiInterface"; 
import { ReducedPokemon } from "@/types/types";
import { reducePokemonData } from "@/lib/api/apiReducers";


interface PokemonData {
  pokemonDetails: ReducedPokemon[];
  loading: boolean;
  error: string | null;
}
  
export function loadPokemonData(currentPage: number, name: string): PokemonData {
  const [pokemonDetails, setPokemonDetails] = useState<ReducedPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const fetchedData = name ? await fetchSinglePokemon(name) : await fetchPokemon(12, currentPage);
        const cleanPokemonData = reducePokemonData(fetchedData); 
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
    }, [currentPage, name]);

    return { pokemonDetails, loading, error };
}