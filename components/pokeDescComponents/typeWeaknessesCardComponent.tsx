import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
  
interface TypesAndWeaknessesComponentProps {
  types: string[];
  weaknesses: string[];
}

export function TypesAndWeaknessesComponent({ types, weaknesses }: TypesAndWeaknessesComponentProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <div>
        <CardHeader className="text-left">
          <CardTitle className="text-black font-semibold">Types</CardTitle>
        </CardHeader>
        <div className="flex flex-wrap justify-left gap-2 ml-6">
          {types.map((type) => (
            <span key={type} className="bg-black text-white text-xs py-0.5 px-3 rounded-md">
              {type}
            </span>
          ))}
        </div>

        <CardHeader className="text-left">
          <CardTitle className="text-black font-semibold">Weaknesses</CardTitle>
        </CardHeader>
        <div className="flex flex-wrap justify-left gap-2 ml-6 ">
          {weaknesses.map((weakness) => (
            <span key={weakness} className="bg-black text-white text-xs py-0.5 px-3 rounded-md">
              {weakness}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}