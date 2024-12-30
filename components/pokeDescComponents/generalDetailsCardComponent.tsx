import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

interface GeneralDetailsComponentProps {
  height: number;
  category: string;
  weight: number;
  genders: string[]
}
  
export function GeneralDetails({ height, category, weight, genders }: GeneralDetailsComponentProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <div>
        <CardHeader className="text-left">
          <CardTitle className="text-black text-s font-semibold">Height</CardTitle>
          <div>
            <CardDescription className="text-s">{height} m</CardDescription>
          </div>
        </CardHeader>
        
        <CardHeader className="text-left">
          <CardTitle className="font-semibold">Category</CardTitle>
          <div>
            <CardDescription className="text-s">{category}</CardDescription>
          </div>
        </CardHeader>
       
        <CardHeader className="text-left">
          <CardTitle className="font-semibold">Weight</CardTitle>
          <div>
            <CardDescription className="text-s">{weight} kg</CardDescription>
          </div>
        </CardHeader>
     
        <CardHeader className="text-left">
          <CardTitle className="font-semibold">Genders</CardTitle>
          <div>
            <CardDescription className="text-s">
              {genders.join(' / ')}
            </CardDescription>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
}