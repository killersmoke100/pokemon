import { ReducedPokemon } from "@/types/types";
import { CardComponent } from "@/components/cardComponent";

interface GridComponentProps {
  pokemonDetails: ReducedPokemon[];
}
  
export function GridComponent({ pokemonDetails }: GridComponentProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {pokemonDetails.map((poke) => (
        <CardComponent key={poke.id} pokemonDetail={poke}/>))}
    </div>
  );
}