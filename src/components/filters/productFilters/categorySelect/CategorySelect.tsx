import { SingleValue } from "react-select";
import { Select, ISingleSelectItem } from "../../../core";
import { FILTER_QUERY_KEYS } from "../constants";
import { useEffect, useState } from "react";
import { findCategoryItem } from "./utils";
import { useGetCategoriesQuery } from "../../../../hooks";

interface IProps {
  selectedQueryParam: string | null;
  setQueryParam: (key: string, value: string) => void;
}

const CategorySelect = ({ selectedQueryParam, setQueryParam }: IProps) => {
  const { parsedCategories, isFetching } = useGetCategoriesQuery();

  const [selectedItem, setSelectedItem] = useState(
    findCategoryItem(parsedCategories, selectedQueryParam) ||
      parsedCategories[0],
  );

  useEffect(() => {
    const foundCategoryItem = findCategoryItem(
      parsedCategories,
      selectedQueryParam,
    );

    if (foundCategoryItem) setSelectedItem(foundCategoryItem);
  }, [parsedCategories, selectedQueryParam]);

  const onSelectChange = (newValue: SingleValue<ISingleSelectItem>) => {
    if (!newValue?.value) return;

    setSelectedItem(newValue);
    setQueryParam(FILTER_QUERY_KEYS.category, newValue?.value);
  };

  return (
    <Select
      options={parsedCategories}
      onChange={onSelectChange}
      selectedItem={selectedItem || parsedCategories[0]}
      isLoading={isFetching}
    />
  );
};

export default CategorySelect;
