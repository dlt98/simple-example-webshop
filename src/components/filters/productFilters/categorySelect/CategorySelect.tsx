import { SingleValue } from "react-select";
import { Select, ISingleSelectItem } from "../../../core";
import { FILTER_QUERY_KEYS } from "../constants";
import { useEffect, useState } from "react";
import { findCategoryItem } from "./utils";
import {
  IUseQueryParamDataResult,
  useGetCategoriesQuery,
} from "../../../../hooks";

interface IProps {
  selectedQueryParam: string | null;
  setQueryParam: IUseQueryParamDataResult["setQueryParam"];
}

const CategorySelect = ({ selectedQueryParam, setQueryParam }: IProps) => {
  const { parsedCategories, isFetching } = useGetCategoriesQuery();

  const [selectedItem, setSelectedItem] = useState<ISingleSelectItem | null>(
    findCategoryItem(parsedCategories, selectedQueryParam),
  );

  useEffect(() => {
    const foundCategoryItem = findCategoryItem(
      parsedCategories,
      selectedQueryParam,
    );

    if (foundCategoryItem) setSelectedItem(foundCategoryItem);
  }, [parsedCategories, selectedQueryParam]);

  const onSelectChange = (newValue: SingleValue<ISingleSelectItem>) => {
    setSelectedItem(newValue);

    setQueryParam(FILTER_QUERY_KEYS.category, newValue?.value);
  };

  return (
    <div>
      <Select
        options={parsedCategories}
        onChange={onSelectChange}
        selectedItem={selectedItem}
        isLoading={isFetching}
        isClearable
        placeholder="Select a category"
      />
    </div>
  );
};

export default CategorySelect;
