interface SpriteComponentProps {
  id: number;
  name: string;
  sprite: string;
}

export function SpriteImageIdAndText({ id, name, sprite }: SpriteComponentProps) {
  return (
    <div>
      <div className="relative flex items-center justify-center pt-16">
        <div className="w-40 h-40 bg-cardBackground rounded-full flex items-center justify-center border-4 border-white">
          <img
            src={sprite}
            alt={`${name} sprite`}
            className="w-32 h-32 object-contain rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 relative">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-lg font-semibold text-subHeadingGrey">{`#${String(id).padStart(4, '0')}`}</span>
      </div>
    </div>
  );
}
