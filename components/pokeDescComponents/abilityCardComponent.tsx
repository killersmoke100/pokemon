import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

interface AbilitiesAndEffectsComponentProps {
  abilitiesAndEffects: { [key: string]: string };
}
  
export function AbiltyAndEffects({ abilitiesAndEffects }: AbilitiesAndEffectsComponentProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <div>
        <CardHeader className="text-left">
          <CardTitle className="font-semibold">Abilities</CardTitle>
          <div>
            {Object.entries(abilitiesAndEffects).map(([ability, effect]) => (
              <div key={ability} className="my-5"> 
                <CardDescription className="text-s font-semibold">{ability}</CardDescription>
                <CardDescription className="text-s italic">{effect}</CardDescription>
              </div>
            ))}
          </div>
        </CardHeader>
      </div>
    </Card>
  );
}