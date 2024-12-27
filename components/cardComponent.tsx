import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
      <Card>
        <CardHeader>
          <CardTitle>{pokemonDetail.name}</CardTitle>
          <CardDescription>{pokemonDetail.id}</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={pokemonDetail.sprite}
            width={50} 
            height={50}
            alt={`${pokemonDetail.name} sprite`}
          />
        </CardContent>
        <CardFooter>
          {pokemonDetail.types}
        </CardFooter>
      </Card>
    </Link>
  )
}