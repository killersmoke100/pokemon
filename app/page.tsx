"use client";
import { useState, useEffect } from "react";
import { fetchPokemon } from "@/lib/api_interface"; 
import { ReducedPokemon } from "@/types/types";

export default function PokemonList() {
  const [pokemonDetails, setPokemonDetails] = useState<ReducedPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const pokemons = await fetchPokemon(12, currentPage);
        setPokemonDetails(pokemons); 
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

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <h1>Pokemon List</h1>
        <ul>
          {pokemonDetails.map((poke, index) => (
            <li key={index}>
              {poke.id} - {poke.name} - {poke.types}
              <img
              src={poke.sprite}
              width={50} 
              height={50}/>
            </li>
          ))}
        </ul>
      </div>

      <div className="pagination">
        <button 
          className="button-outline" 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1}> 
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button 
          className="button-outline" 
          onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}
