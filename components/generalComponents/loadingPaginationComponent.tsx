import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
  } from "@/components/ui/pagination";

export function LoadingPaginationComponent() {
  return (
    <Pagination className="flex items-center justify-center mt-8 mb-8">
        <PaginationContent>
        <PaginationItem className="bg-subHeadingGrey text-white rounded-md mr-2">
            <PaginationPrevious
            />
        </PaginationItem>
        <PaginationItem className="bg-subHeadingGrey text-white rounded-md">
            <PaginationNext/>
        </PaginationItem>
        </PaginationContent>
    </Pagination>
  );
}