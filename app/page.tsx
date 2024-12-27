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
    <div>
      <HeroSection/>
      <div className="border-t border-gray-300 w-full"></div>
      
      <h2
        className="mt-0 mb-0 mx-auto"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "30px",
          textAlign: "left",
        }}
      >Explore Pokémon</h2>

      <GridComponent
        pokemonDetails={pokemonDetails}
      />
      
      <PaginationComponent
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
}
