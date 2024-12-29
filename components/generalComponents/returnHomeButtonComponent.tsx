import { Button } from "@/components/ui/button"; 
import { ChevronLeft } from "@/components/ui/pagination"; 

export function ReturnButton() {
  return(
    <Button 
      className="bg-black text-white hover:bg-white hover:text-black my-8 sm:mx-8 md:mx-16 lg:mx-24" 
      onClick={() => window.location.href = '/'}
      >
      <ChevronLeft className="h-4 w-4" /> Return Home
    </Button>
  )
}