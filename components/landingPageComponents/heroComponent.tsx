interface HeroComponentProps {
  h1Text: string;
  h2Text: string;
}
  
export function HeroSection({ h1Text, h2Text }: HeroComponentProps) {
  return (
    <header className="bg-white pt-4 pb-8 w-full border-b border-borderGrey flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-black font-semibold text-center" 
        > {h1Text}
        </h1>
        <h2 className="text-l text-subHeadingGrey font-semibold text-center"
        > {h2Text}
        </h2>
      </div>
    </header>
  );
}