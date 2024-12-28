"use client";
import { useState } from "react";
import { PaginationComponent } from "@/components/paginationComponent";
import { GridComponent } from "@/components/gridComponent";
import { HeroSection } from "@/components/heroComponent";
import { loadPokemonData } from "@/hooks/loadPokemonList";


export default function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1); 
  const { pokemonDetails, loading, error } = loadPokemonData(currentPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1); 
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure page can't go lower than 1
  };

  if (loading) return <p>Loading Pokémons...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div >
      <HeroSection/>
      <div>
        <h2
          className="flex items-center justify-left mt-8 mb-8 mx-auto font-semibold sm:px-8 md:px-16 lg:px-24"
        >Explore Pokémon</h2>
      </div>

      <main>
        <GridComponent
          pokemonDetails={pokemonDetails}
        />
        
        <PaginationComponent
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </main>

      <footer className="flex items-center justify-center bg-white text-center py-8 border-t border-gray-300">
        <p className="text-xs font-bold">Thank you for using the Pokémon Browser!</p>
      </footer>
    </div>
  );
}
