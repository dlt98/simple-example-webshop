import { useGetProductsQuery } from "../../../hooks";
import CategorySelect from "./categorySelect/CategorySelect";
import { FILTER_QUERY_KEYS } from "./constants";
import { OrderSelect } from "./orderSelect";

export const ProductFilters = () => {
  const { setQueryParam, getQueryParam, searchParams } = useGetProductsQuery();

  const shouldResetCheck = (key: string) => {
    const sortByKey = searchParams.get("sortBy");

    return sortByKey !== key;
  };

  return (
    <div>
      <CategorySelect
        selectedQueryParam={getQueryParam(FILTER_QUERY_KEYS.category)}
        setQueryParam={setQueryParam}
      />
      <OrderSelect
        selectedQueryParam={getQueryParam(FILTER_QUERY_KEYS.sortBy.title)}
        setQueryParam={setQueryParam}
        sortKey={FILTER_QUERY_KEYS.sortBy.title}
        placeholder="Sort by name"
        shouldReset={shouldResetCheck(FILTER_QUERY_KEYS.sortBy.title)}
      />
      <OrderSelect
        selectedQueryParam={getQueryParam(FILTER_QUERY_KEYS.sortBy.price)}
        setQueryParam={setQueryParam}
        sortKey={FILTER_QUERY_KEYS.sortBy.price}
        placeholder="Sort by price"
        shouldReset={shouldResetCheck(FILTER_QUERY_KEYS.sortBy.price)}
      />
    </div>
  );
};
