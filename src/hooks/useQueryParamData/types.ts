export type QueryParams = Record<string, string>;

export type FetchFunction<T> = (params: QueryParams | null) => Promise<T>;

export interface IQueryParamItem {
  key: string;
  value?: string;
}

export type ISetQueryParamFunc = (
  items: IQueryParamItem | IQueryParamItem[],
) => void;
