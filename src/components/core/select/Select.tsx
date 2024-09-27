import ReactSelect, { SingleValue } from "react-select";
import { ISingleSelectItem } from "./types";

interface IProps {
  selectedItem: ISingleSelectItem | null;
  options: ISingleSelectItem[];
  onChange: (newValue: SingleValue<ISingleSelectItem>) => void;
  isLoading?: boolean;
  isClearable?: boolean;
  placeholder?: string;
}

export const Select = ({
  selectedItem,
  options,
  onChange,
  isLoading,
  isClearable,
  placeholder,
}: IProps) => {
  return (
    <div className="flex">
      <ReactSelect
        options={options}
        onChange={onChange}
        value={selectedItem}
        isLoading={isLoading}
        isSearchable
        placeholder={placeholder}
      />
      {!!isClearable && (
        <button className="font-bold" onClick={() => onChange(null)}>
          X
        </button>
      )}
    </div>
  );
};
