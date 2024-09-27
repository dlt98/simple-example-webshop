import { useGetProductsQuery } from "../../../hooks";
import CategorySelect from "./categorySelect/CategorySelect";
import { FILTER_QUERY_KEYS } from "./constants";

export const ProductFilters = () => {
  const { setQueryParam, getQueryParam } = useGetProductsQuery();

  return (
    <div>
      <CategorySelect
        selectedQueryParam={getQueryParam(FILTER_QUERY_KEYS.category)}
        setQueryParam={setQueryParam}
      />
    </div>
  );
};
