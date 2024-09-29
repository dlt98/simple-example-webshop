import { twMerge } from "tailwind-merge";
import { IPaginationProps } from "./types";
import { usePagination } from "./hooks";
import { PaginationNavigation, PaginationNumber } from "./components";

export function Pagination({ className, ...otherProps }: IPaginationProps) {
  const {
    handleNextPage,
    handlePreviousPage,
    onPageChange,
    pageNumbers,
    currentPage,
    totalPages,
  } = usePagination(otherProps);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav
      className={twMerge(
        "flex items-center justify-center space-x-2",
        className,
      )}
      aria-label="Pagination"
    >
      <PaginationNavigation
        onClick={handlePreviousPage}
        isDisabled={isFirstPage}
        text="Previous"
      />
      {pageNumbers.map((pageNum) => (
        <PaginationNumber
          isCurrentPage={pageNum === currentPage}
          onClick={() => onPageChange(pageNum)}
          number={pageNum}
        />
      ))}
      <PaginationNavigation
        onClick={handleNextPage}
        isDisabled={isLastPage}
        text="Next"
      />
    </nav>
  );
}
