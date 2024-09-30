import { useState, useEffect } from "react";
import { IPaginationProps } from "../types";

type IProps = Omit<IPaginationProps, "className">;

export const usePagination = ({
  total,
  limit,
  setQueryParam,
  isFetching,
}: IProps) => {
  const [page, setPage] = useState(1);
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

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const onPageChange = (pageNum: number) => setPage(pageNum);

  const totalPages = Math.ceil(totalItems / limit);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return {
    currentPage: page,
    totalPages,
    handleNextPage,
    handlePreviousPage,
    onPageChange,
    pageNumbers,
  };
};
