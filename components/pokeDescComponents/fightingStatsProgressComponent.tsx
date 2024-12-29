import { Progress } from "@/components/ui/progress";
import {
  Card
} from "@/components/ui/card";

interface StatsComponentProps {
  stats: { [key: string]: number };
}

export function StatsComponent({ stats }: StatsComponentProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full p-4 space-y-4">
        {Object.entries(stats).map(([statName, value]) => (
          <div key={statName} className="flex items-center space-x-16">
            <span className="text-s font-semibold w-40">
              {statName}
            </span>
            <div className="w-full">
              <Progress value={value} className="h-3" />
            </div>
          </div>
        ))}
    </Card>
  )
}
