interface FooterComponentProps {
  pText: string;
}

export function Footer({ pText }: FooterComponentProps) {
  return(
    <footer className="flex items-center justify-center bg-white text-center py-8 border-t border-borderGrey">
      <p className="text-xs font-bold">{pText}</p>
    </footer>
  )
}