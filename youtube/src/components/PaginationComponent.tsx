import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination"


export function PaginationComponent({decrease, increase, count}: {decrease: ()=>void, increase: ()=>void, count: number}) {

  return (
    <div className="flex items-center justify-center mt-3">
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={decrease} />
          </PaginationItem>
          {count}
          <PaginationItem>
            <PaginationNext onClick={increase} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
