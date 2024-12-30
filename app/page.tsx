"use client";
import { useState } from "react";
import { PaginationComponent } from "@/components/landingPageComponents/paginationComponent";
import { GridComponent } from "@/components/landingPageComponents/gridComponent";
import { HeroSection } from "@/components/landingPageComponents/heroComponent";
import { Footer } from "@/components/generalComponents/footerComponent";
import { loadPokemonData } from "@/hooks/loadPokemonList";
import { LoadingSpinnerComponent } from "@/components/generalComponents/loadingSpinnerComponent";
import { LoadingPaginationComponent } from "@/components/generalComponents/loadingPaginationComponent";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";

export default function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1); 
  const [pokemonSearchInput, setPokemonSearchInput] = useState("");
  const [pokemonSearchName, setPokemonSearchName] = useState("");
  const { pokemonDetails, loading, error } = loadPokemonData(currentPage, pokemonSearchName);


  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1); 
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); 
  };

  const handleHeroSectionClick = () => {
    setPokemonSearchName(""); 
    setPokemonSearchInput(""); 
  };

  const handleSearch = (name: string) => {
    setPokemonSearchName(name); 
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
      <Link href="/">
       <div onClick={handleHeroSectionClick}> 
          <HeroSection/>
        </div>
      </Link>
      <div className="flex flex-row my-4 font-semibold sm:mx-8 md:mx-16 lg:mx-24 justify-between items-center">
      
      {!pokemonSearchName ? (<h2>Explore Pokémon</h2> ) : (<h2>Search Results for '{pokemonSearchName}'</h2>)}

      <div className="flex flex-row gap-x-2 font-semibold">
        <Input  value={pokemonSearchInput} onChange={(e) => setPokemonSearchInput(e.target.value)} type="text" placeholder="Find Pokémon" />
        <Button onClick={() => handleSearch(pokemonSearchInput)} className="bg-black text-white hover:bg-white hover:text-black">
          Search
        </Button>
        </div>
      </div>

      <GridComponent
        pokemonDetails={pokemonDetails}
      />
      
      {!pokemonSearchName ? (
      <PaginationComponent
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      /> ) : ( <LoadingPaginationComponent /> )}

      <Footer/>
    </div>
  );
}
