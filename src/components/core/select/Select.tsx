import ReactSelect, { SingleValue } from "react-select";
import { ISingleSelectItem } from "./types";

interface IProps {
  selectedItem: ISingleSelectItem;
  options: ISingleSelectItem[];
  onChange: (newValue: SingleValue<ISingleSelectItem>) => void;
  isLoading?: boolean;
}

export const Select = ({
  selectedItem,
  options,
  onChange,
  isLoading,
}: IProps) => {
  return (
    <ReactSelect
      options={options}
      onChange={onChange}
      value={selectedItem}
      isLoading={isLoading}
      isSearchable
    />
  );
};
