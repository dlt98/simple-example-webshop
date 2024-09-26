import { SingleValue } from "react-select";
import { useGetCategoriesQuery } from "../../../hooks/queryHooks/categories";
import { Select } from "../../core";
import { ISingleSelectItem } from "../../core/select/types";
import { useQueryParamData } from "../../../hooks";
import { fetchAllCategories } from "../../../api/categories";
import { CATEGORY_KEYS } from "../../../constants";

export const ProductFilters = () => {
  const { setQueryParam } = useQueryParamData(
    [CATEGORY_KEYS.allCategories],
    fetchAllCategories,
  );
  const { parsedCategories, isFetching } = useGetCategoriesQuery();

  if (isFetching) return <div>THIS IS FETCHING CATEGORIES</div>;

  const onSelectChange = (newValue: SingleValue<ISingleSelectItem>) => {
    if (!newValue?.value) return;

    setQueryParam("category", newValue?.value);
  };

  return (
    <div>
      <Select options={parsedCategories} onChange={onSelectChange} />
    </div>
  );
};
