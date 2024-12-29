import {
  Card
} from "@/components/ui/card";

interface description {
  desc: string;
}

export function DescriptionComponent({ desc }: description) {
  return (
    <Card className="flex flex-col bg-cardBackground overflow-hidden my-8 sm:mx-8 md:mx-16 lg:mx-24">
      <div className="flex items-center space-x-4 p-4">
        <img
          src={"/images/cherishball.jpg"}
          alt={"Cherish Ball"}
          className="w-16 h-16 object-contain rounded-full"
        />
        <span className="text-l">{desc}</span>
      </div>
    </Card>
  )
}
