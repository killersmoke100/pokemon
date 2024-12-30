"use client";
import { useParams } from 'next/navigation'; 
import { loadPokemonDesc } from "@/hooks/loadPokemonDesc";
import { StatsComponent } from "@/components/pokeDescComponents/fightingStatsProgressComponent";
import { AbiltyAndEffects } from "@/components/pokeDescComponents/abilityCardComponent";
import { GeneralDetails } from "@/components/pokeDescComponents/generalDetailsCardComponent";
import { TypesAndWeaknesses } from "@/components/pokeDescComponents/typeWeaknessesCardComponent";
import { Description} from "@/components/pokeDescComponents/descriptionComponent";
import { SpriteImageIdAndText} from "@/components/pokeDescComponents/spriteComponent";
import { ReturnButton} from "@/components/generalComponents/returnHomeButtonComponent";
import { Footer } from "@/components/generalComponents/footerComponent";
import { LoadingSpinner } from "@/components/generalComponents/loadingSpinnerComponent";
import { BrowserSubheading } from "@/components/pokeDescComponents/browserSubheadingComponent";

export default function PokemonDescription() {
  const { id } = useParams<{ id: string }>();
  const { pokemonDescription, loading, error } = loadPokemonDesc(id);

  if (loading) return (
    <div className="flex flex-col min-h-screen">
      <BrowserSubheading h2Text="Pokémon Browser"/>
      <div className="flex-grow flex flex-col items-center justify-center">
        <LoadingSpinner/>
      </div>
      <Footer pText="Thank you for using the Pokémon Browser!"/>
    </div>
  );
  
  if (error) return <p>Error: {error}</p>;
  if (!pokemonDescription) return <p>Error: No Description Found</p>;
  
  return (
    <div>
      <BrowserSubheading h2Text="Pokémon Browser"/>

      <div className="relative w-full">
        <div className="absolute w-full h-1/2 bg-gray-300"></div>
        <div className="absolute w-full bg-white"></div>
          <SpriteImageIdAndText id={pokemonDescription.id} name={pokemonDescription.name} sprite={pokemonDescription.sprite}/>
      </div>
  
      <Description desc={pokemonDescription.description}/>
    
      <div className="grid grid-cols-3 grid-rows-2 gap-4 sm:mx-8 md:mx-16 lg:mx-24">
        <div className="col-span-1 row-span-2">
          <GeneralDetails
            height={pokemonDescription.height}
            category={pokemonDescription.category}
            weight={pokemonDescription.weight}
            genders={pokemonDescription.genders}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <TypesAndWeaknesses
            types={pokemonDescription.types}
            weaknesses={pokemonDescription.weaknesses}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <AbiltyAndEffects abilitiesAndEffects={pokemonDescription.abilities_and_effects} />
        </div>

        <div className="col-span-2 row-span-1">
          <StatsComponent stats={pokemonDescription.stats} />
        </div>
      </div>
      <ReturnButton buttonText="Return Home"/>
      <Footer pText="Thank you for using the Pokémon Browser!"/>
    </div>
  );
}