import { useGetProductsQuery } from "../../../hooks";
import CategorySelect from "./categorySelect/CategorySelect";
import { FILTER_QUERY_KEYS } from "./constants";
import NameSorting from "./sortSelects/NameSorting";

export const ProductFilters = () => {
  const { setQueryParam, getQueryParam } = useGetProductsQuery();

  return (
    <div>
      <CategorySelect
        selectedQueryParam={getQueryParam(FILTER_QUERY_KEYS.category)}
        setQueryParam={setQueryParam}
      />
      <NameSorting
        selectedQueryParam={getQueryParam(FILTER_QUERY_KEYS.sortBy.title)}
        setQueryParam={setQueryParam}
      />
    </div>
  );
};
