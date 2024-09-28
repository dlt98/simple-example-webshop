import { IUseQueryParamDataResult } from "../../../../hooks";
import { useState } from "react";
import { SORT_OPTIONS } from "./constants";
import { FILTER_QUERY_KEYS } from "../constants";
import { SingleValue } from "react-select";
import { ISingleSelectItem, Select } from "../../../core";
import { generateSortQuery } from "./utils";

interface IProps {
  selectedQueryParam: string | null;
  setQueryParam: IUseQueryParamDataResult["setQueryParam"];
}

const NameSorting = ({ setQueryParam, selectedQueryParam }: IProps) => {
  const [selectedItem, setSelectedItem] = useState<ISingleSelectItem | null>(
    SORT_OPTIONS.find(({ value }) => value === selectedQueryParam) ||
      SORT_OPTIONS[0],
  );

  const onSelectChange = (newValue: SingleValue<ISingleSelectItem>) => {
    setSelectedItem(newValue);

    setQueryParam(
      generateSortQuery(FILTER_QUERY_KEYS.sortBy.title, newValue?.value),
    );
  };

  return (
    <Select
      options={SORT_OPTIONS}
      onChange={onSelectChange}
      selectedItem={selectedItem}
      placeholder="Select a category"
    />
  );
};

export default NameSorting;
