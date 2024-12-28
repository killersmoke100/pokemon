import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReducedPokemon } from "@/types/types";
import Link from "next/link";

interface CardComponentProps {
  pokemonDetail: ReducedPokemon;
}

export function CardComponent({ pokemonDetail }: CardComponentProps) {
  return (
    <Link href={`/pokemon/${pokemonDetail.id}`}>
      <Card className="flex flex-col overflow-hidden shadow-md">

        <div className="bg-cardBackground flex items-center justify-center h-28">
          <img
            src={pokemonDetail.sprite}
            alt={`${pokemonDetail.name} sprite`}
            className="w-28 h-28 object-contain"
          />
        </div>

        <div className="h-36">
          <CardHeader className="text-left">
            <CardTitle className="text-black text-lg font-semibold" >{pokemonDetail.name}</CardTitle>
              <CardDescription className="text-subHeading font-semibold" >
                {`#${String(pokemonDetail.id).padStart(4, '0')}`}
              </CardDescription>
          </CardHeader>

          <div className="flex justify-left gap-2 ml-6 mb-6">
            {pokemonDetail.types.map((type) => (
              <span key={type} className="bg-black text-white text-xs py-0.5 px-3 rounded-md">
                {type}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}