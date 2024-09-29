import { ISetQueryParamFunc } from "@/hooks";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  total?: number;
  limit: number;
  className?: string;
  setQueryParam: ISetQueryParamFunc;
  isFetching?: boolean;
}

export function Pagination({
  total,
  limit,
  className,
  setQueryParam,
  isFetching,
}: PaginationProps) {
  const [page, setPage] = useState(1); // Add state for current page
  const [totalItems, setTotalItems] = useState(total || 0);
  const skip = (page - 1) * limit; // Calculate skip based on current page

  useEffect(() => {
    setQueryParam([
      {
        key: "limit",
        value: limit.toString(),
      },
      {
        key: "skip",
        value: skip.toString(),
      },
    ]);
  }, [page]);

  useEffect(() => {
    if (!isFetching && total) setTotalItems(total);
  }, [total, isFetching]);

  const handleNextPage = () => setPage((prev) => prev + 1); // Function to go to the next page
  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1)); // Function to go to the previous page

  const totalPages = Math.ceil(totalItems / limit);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderPageButton = (pageNumber: number) => {
    const isCurrentPage = pageNumber === page;
    return (
      <button
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        className={twMerge(
          "rounded-md px-3 py-2 text-sm font-medium",
          isCurrentPage
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-700 hover:bg-gray-50",
        )}
        aria-current={isCurrentPage ? "page" : undefined}
      >
        {pageNumber}
      </button>
    );
  };

  return (
    <nav
      className={twMerge(
        "flex items-center justify-center space-x-2",
        className,
      )}
      aria-label="Pagination"
    >
      <button
        onClick={handlePreviousPage}
        disabled={page === 1}
        className={twMerge(
          "rounded-md px-3 py-2 text-sm font-medium",
          page === 1
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-white text-gray-700 hover:bg-gray-50",
        )}
        aria-label="Previous page"
      >
        Previous
      </button>

      {pageNumbers.map(renderPageButton)}

      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className={twMerge(
          "rounded-md px-3 py-2 text-sm font-medium",
          page === totalPages
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-white text-gray-700 hover:bg-gray-50",
        )}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}
