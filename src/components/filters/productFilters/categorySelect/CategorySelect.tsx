import { SingleValue } from "react-select";
import { Select, ISingleSelectItem } from "../../../core";
import { FILTER_QUERY_KEYS } from "../constants";
import { useEffect, useRef, useState } from "react";
import { findCategoryItem } from "./utils";
import { useGetCategoriesQuery, useGetProductsQuery } from "../../../../hooks";

const CategorySelect = () => {
  const { parsedCategories, isFetching } = useGetCategoriesQuery();
  const { setQueryParam, getQueryParam, searchParams } = useGetProductsQuery();
  const { current: selectedQueryParam } = useRef(
    getQueryParam(FILTER_QUERY_KEYS.category),
  );

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

    setQueryParam([
      { key: FILTER_QUERY_KEYS.category, value: newValue?.value },
      { key: FILTER_QUERY_KEYS.search },
    ]);
  };

  const resetCategory = () => {
    setSelectedItem(null);
    setQueryParam([{ key: FILTER_QUERY_KEYS.category }]);
  };

  useEffect(() => {
    // Search and category can't be run at the same time. So resetting them is needed
    if (selectedItem && getQueryParam(FILTER_QUERY_KEYS.search)) {
      resetCategory();
    }
  }, [searchParams]);

  return (
    <div>
      <Select
        id="category select"
        options={parsedCategories}
        onChange={onSelectChange}
        selectedItem={selectedItem}
        isLoading={isFetching}
        isClearable={!!selectedItem}
        placeholder="Select a category"
        label="Select a category"
      />
    </div>
  );
};

export default CategorySelect;
