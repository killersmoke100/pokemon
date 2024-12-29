"use client";
import { useParams } from 'next/navigation'; 
import { loadPokemonDesc } from "@/hooks/loadPokemonDesc";
import { StatsComponent } from "@/components/pokeDescComponents/fightingStatsProgressComponent";
import { AbiltyComponent } from "@/components/pokeDescComponents/abilityCardComponent";
import { GeneralDetailsComponent } from "@/components/pokeDescComponents/generalDetailsCardComponent";
import { TypesAndWeaknessesComponent } from "@/components/pokeDescComponents/typeWeaknessesCardComponent";
import { DescriptionComponent} from "@/components/pokeDescComponents/descriptionComponent";
import { SpriteComponent} from "@/components/pokeDescComponents/spriteComponent";
import { ReturnButton} from "@/components/generalComponents/returnHomeButtonComponent";
import { Footer } from "@/components/generalComponents/footerComponent";
import { LoadingSpinnerComponent } from "@/components/generalComponents/loadingSpinnerComponent";
import { BrowserSubheadingComponent } from "@/components/pokeDescComponents/browserSubheadingComponent";

export default function PokemonDescription() {
  const { id } = useParams<{ id: string }>();
  const { pokemonDescription, loading, error } = loadPokemonDesc(id);
  

  if (loading) return (
    <div className="flex flex-col min-h-screen">
      <BrowserSubheadingComponent/>
      <div className="flex-grow flex flex-col items-center justify-center">
        <LoadingSpinnerComponent/>
      </div>
      <Footer/>
    </div>
  );
  
  if (error) return <p>Error: {error}</p>;
  if (!pokemonDescription) return <p>Error: No Description Found</p>;
  
  return (
    <div>
      <BrowserSubheadingComponent/>

      <div className="relative w-full">
        <div className="absolute w-full h-1/2 bg-gray-300"></div>
        <div className="absolute w-full bg-white"></div>
          <SpriteComponent id={pokemonDescription.id} name={pokemonDescription.name} sprite={pokemonDescription.sprite}/>
      </div>
  
      <DescriptionComponent desc={pokemonDescription.description}/>
    
      <div className="grid grid-cols-3 grid-rows-2 gap-4 sm:mx-8 md:mx-16 lg:mx-24">
        <div className="col-span-1 row-span-2">
          <GeneralDetailsComponent
            height={pokemonDescription.height}
            category={pokemonDescription.category}
            weight={pokemonDescription.weight}
            genders={pokemonDescription.genders}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <TypesAndWeaknessesComponent
            types={pokemonDescription.types}
            weaknesses={pokemonDescription.weaknesses}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <AbiltyComponent abilitiesAndEffects={pokemonDescription.abilities_and_effects} />
        </div>

        <div className="col-span-2 row-span-1">
          <StatsComponent stats={pokemonDescription.stats} />
        </div>
      </div>
      <ReturnButton/>
      <Footer/>
    </div>
  );
}