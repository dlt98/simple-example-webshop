import { SingleValue } from "react-select";
import { useGetCategoriesQuery } from "../../../hooks/queryHooks/categories";
import { Select } from "../../core";
import { ISingleSelectItem } from "../../core/select/types";

export const ProductFilters = () => {
  const { parsedCategories, isFetching } = useGetCategoriesQuery();

  if (isFetching) return <div>THIS IS FETCHING CATEGORIES</div>;

  const onSelectChange = (newValue: SingleValue<ISingleSelectItem>) => {
    console.log("newValue", newValue);
  };

  return (
    <div>
      <Select options={parsedCategories} onChange={onSelectChange} />
    </div>
  );
};
