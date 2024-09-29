import { useGetProductsQuery } from "../../../hooks";
import CategorySelect from "./categorySelect/CategorySelect";
import { FILTER_QUERY_KEYS } from "./constants";
import { OrderSelect } from "./orderSelect";
import { SearchInput } from "./searchInput";

export const ProductFilters = () => {
  const { setQueryParam, getQueryParam } = useGetProductsQuery();

  const shouldResetCheck = (key: string) => {
    const sortByKey = getQueryParam("sortBy");

    return sortByKey !== key;
  };

  const getSelectedQueryParam = (filterKey: string) => {
    const sortByKey = getQueryParam("sortBy");

    if (filterKey !== sortByKey) return null;

    const orderKey = getQueryParam("order");
    return orderKey;
  };

  return (
    <div className="flex gap-4">
      <SearchInput />
      <CategorySelect
        selectedQueryParam={getQueryParam(FILTER_QUERY_KEYS.category)}
        setQueryParam={setQueryParam}
      />
      <OrderSelect
        selectedQueryParam={getSelectedQueryParam(
          FILTER_QUERY_KEYS.sortBy.title,
        )}
        setQueryParam={setQueryParam}
        sortKey={FILTER_QUERY_KEYS.sortBy.title}
        placeholder="Sort by name"
        shouldReset={shouldResetCheck(FILTER_QUERY_KEYS.sortBy.title)}
      />
      <OrderSelect
        selectedQueryParam={getSelectedQueryParam(
          FILTER_QUERY_KEYS.sortBy.price,
        )}
        setQueryParam={setQueryParam}
        sortKey={FILTER_QUERY_KEYS.sortBy.price}
        placeholder="Sort by price"
        shouldReset={shouldResetCheck(FILTER_QUERY_KEYS.sortBy.price)}
      />
    </div>
  );
};
