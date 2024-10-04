import { useState, useEffect } from "react";
import { IPaginationProps } from "../types";
import { FILTER_QUERY_KEYS } from "@/constants";

type IProps = Omit<IPaginationProps, "className">;

const DEFAULT_PAGE_NUM = 1;

export const usePagination = ({
  total,
  limit,
  setQueryParam,
  isFetching,
  searchParams,
  getQueryParam,
}: IProps) => {
  const [page, setPage] = useState(DEFAULT_PAGE_NUM);
  const [totalItems, setTotalItems] = useState(total || 0);

  useEffect(() => {
    setQueryParam([
      {
        key: FILTER_QUERY_KEYS.page,
        value: page === DEFAULT_PAGE_NUM ? undefined : page.toString(),
      },
    ]);
  }, [page]);

  // Resets the page to the default value if the pageNumber is gone
  useEffect(() => {
    if (!getQueryParam(FILTER_QUERY_KEYS.page)) {
      setPage(DEFAULT_PAGE_NUM);
    }
  }, [searchParams]);

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
