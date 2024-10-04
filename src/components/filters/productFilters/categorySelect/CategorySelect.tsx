import { ISingleSelectItem, Select } from "@/components/core";
import { FILTER_QUERY_KEYS } from "@/constants/filterKeys";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/hooks";
import { useRef, useState, useEffect } from "react";
import { SingleValue } from "react-select";

import { findCategoryItem } from "./utils";

export const CategorySelect = () => {
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
      { key: FILTER_QUERY_KEYS.page },
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
