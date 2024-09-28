import { ISetQueryParamFunc } from "../../../../hooks";
import { useEffect, useState } from "react";
import { SORT_OPTIONS } from "./constants";
import { SingleValue } from "react-select";
import { ISingleSelectItem, Select } from "../../../core";
import { generateSortQuery } from "./utils";

interface IProps {
  selectedQueryParam: string | null;
  setQueryParam: ISetQueryParamFunc;
  sortKey: string;
  placeholder: string;
  shouldReset?: boolean; // Used for resetting dropdown option when other sort is selected
}

export const OrderSelect = ({
  setQueryParam,
  selectedQueryParam,
  sortKey,
  placeholder,
  shouldReset,
}: IProps) => {
  const [selectedItem, setSelectedItem] = useState<ISingleSelectItem | null>(
    SORT_OPTIONS.find(({ value }) => value === selectedQueryParam) || null,
  );

  useEffect(() => {
    if (shouldReset) setSelectedItem(null);
  }, [shouldReset]);

  const onSelectChange = (newValue: SingleValue<ISingleSelectItem>) => {
    setSelectedItem(newValue);

    setQueryParam(generateSortQuery(sortKey, newValue?.value));
  };

  return (
    <Select
      id={sortKey}
      options={SORT_OPTIONS}
      onChange={onSelectChange}
      selectedItem={selectedItem}
      placeholder={placeholder}
      label={placeholder}
      isClearable={!!selectedItem}
    />
  );
};
