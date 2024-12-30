interface BrowserComponentProps {
  h2Text: string;
}

export function BrowserSubheading({ h2Text }: BrowserComponentProps) {
  return (
    <h2 className="flex items-center justify-left my-4 mx-auto font-semibold sm:mx-8 md:mx-16 lg:mx-24"
      > {h2Text}
    </h2>
  );
}