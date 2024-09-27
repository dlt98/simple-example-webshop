import { useQueryParamData } from "../../../hooks";
import { fetchAllCategories } from "../../../api/categories";
import { CATEGORY_KEYS } from "../../../constants";
import CategorySelect from "./categorySelect/CategorySelect";
import { FILTER_QUERY_KEYS } from "./constants";

export const ProductFilters = () => {
  const { setQueryParam, getQueryParam } = useQueryParamData(
    [CATEGORY_KEYS.allCategories],
    fetchAllCategories,
  );

  return (
    <div>
      <CategorySelect
        selectedQueryParam={getQueryParam(FILTER_QUERY_KEYS.category)}
        setQueryParam={setQueryParam}
      />
    </div>
  );
};
