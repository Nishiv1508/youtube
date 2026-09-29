import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination"


export function PaginationComponent({decrease, increase}: {decrease: ()=>void, increase: ()=>void}) {

  return (
    <div className="flex items-center justify-center mt-3">
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={decrease} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={increase} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
