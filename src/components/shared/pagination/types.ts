import { ISetQueryParamFunc } from "@/hooks";

export interface IPaginationProps {
  total?: number;
  limit: number;
  className?: string;
  setQueryParam: ISetQueryParamFunc;
  isFetching?: boolean;
}
