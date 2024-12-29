import { ReducedPokemon } from "@/types/types";
import { CardComponent } from "@/components/landingPageComponents/landingPageCardComponent";

interface GridComponentProps {
  pokemonDetails: ReducedPokemon[];
}
  
export function GridComponent({ pokemonDetails }: GridComponentProps) {
  return (
    <div className="flex-grow flex grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-col-6 gap-4 sm:mx-8 md:mx-16 lg:mx-24">
      {pokemonDetails.map((poke) => (
          <CardComponent key={poke.id} pokemonDetail={poke}/>))}
    </div>
  );
}