"use client";
import { useState } from "react";
import { PaginationComponent } from "@/components/landingPageComponents/paginationComponent";
import { GridComponent } from "@/components/landingPageComponents/gridComponent";
import { HeroSection } from "@/components/landingPageComponents/heroComponent";
import { Footer } from "@/components/generalComponents/footerComponent";
import { loadPokemonData } from "@/hooks/loadPokemonList";
import { LoadingSpinnerComponent } from "@/components/generalComponents/loadingSpinnerComponent";
import { LoadingPaginationComponent } from "@/components/generalComponents/loadingPaginationComponent";

export default function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1); 
  const { pokemonDetails, loading, error } = loadPokemonData(currentPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1); 
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure page can't go lower than 1
  };

  
  if (loading) return (
    <div>
      <div className="flex flex-col min-h-screen">
        <HeroSection/>
        <h2 className="text-left my-8 font-semibold sm:mx-8 md:mx-16 lg:mx-24">
          Explore Pokémon
        </h2>
        <div className="flex-grow flex flex-col items-center justify-center">
          <LoadingSpinnerComponent/>
        </div>
        <LoadingPaginationComponent/>
        <Footer/>
      </div>
    </div>
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection/>
      <h2 className="text-left my-8 font-semibold sm:mx-8 md:mx-16 lg:mx-24">
        Explore Pokémon
      </h2>

      <GridComponent
        pokemonDetails={pokemonDetails}
      />
        
      <PaginationComponent
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
      <Footer/>
    </div>
  );
}
