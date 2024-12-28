import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
  
interface PaginationComponentProps {
  currentPage: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export function PaginationComponent({
  currentPage,
  handleNextPage,
  handlePreviousPage,
}: PaginationComponentProps) {
  return (
    <Pagination className="flex items-center justify-center mt-8 mb-8">
      <PaginationContent>
        <PaginationItem className="bg-black text-white rounded-md mr-4">
          <PaginationPrevious
            onClick={handlePreviousPage}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : undefined}
          />
        </PaginationItem>
        <PaginationItem className="bg-black text-white rounded-md">
          <PaginationNext onClick={handleNextPage}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}