import { Button } from "@/components/ui/button"; 
import { ChevronLeft } from "@/components/ui/pagination"; 
import Link from "next/link";

export function ReturnButton() {
  return(
    <Link href="/" passHref>
      <Button 
        className="bg-black text-white hover:bg-white hover:text-black my-8 sm:mx-8 md:mx-16 lg:mx-24" 
      >
        <ChevronLeft className="h-4 w-4" /> Return Home
      </Button>
    </Link>
  )
}