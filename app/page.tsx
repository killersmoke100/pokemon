"use client";
import { useState } from "react";
import { PaginationComponent } from "@/components/landingPageComponents/paginationComponent";
import { GridComponent } from "@/components/landingPageComponents/gridComponent";
import { HeroSection } from "@/components/landingPageComponents/heroComponent";
import { Footer } from "@/components/generalComponents/footerComponent";
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
          className="flex items-center justify-left mt-8 mb-8 mx-auto font-semibold sm:mx-8 md:mx-16 lg:mx-24"
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

      <Footer/>
    </div>
  );
}
