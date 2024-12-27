"use client";
import { useState, useEffect } from "react";
import { fetchPokemon } from "@/lib/api/apiInterface"; 
import { ReducedPokemon } from "@/types/types";
import Link from "next/link";
import { reducePokemonData } from '@/lib/api/apiReducers';

export default function PokemonList() {
  const [pokemonDetails, setPokemonDetails] = useState<ReducedPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [currentPage, setCurrentPage] = useState(1); 

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

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1); 
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure page can't go lower than 1
  };

  if (loading) return <p>Loading Pokémons...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <h1>Pokemon List</h1>
        <ul>
          {pokemonDetails.map((poke, index) => (
            <li key={index}>
              {poke.id} - {poke.name} - {poke.types} 
              <Link href={`/pokemon/${poke.id}`}>
              <img
                src={poke.sprite}
                width={50} 
                height={50}
                alt={`${poke.name} sprite`}/>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1}> 
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button 
          onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}
