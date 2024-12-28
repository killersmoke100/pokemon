import { ReducedPokemon } from "@/types/types";
import { CardComponent } from "@/components/cardComponent";

interface GridComponentProps {
  pokemonDetails: ReducedPokemon[];
}
  
export function GridComponent({ pokemonDetails }: GridComponentProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-col-6 gap-x-4 gap-y-8 sm:px-8 md:px-16 lg:px-24">
      {pokemonDetails.map((poke) => (
          <CardComponent key={poke.id} pokemonDetail={poke}/>))}
    </div>
  );
}