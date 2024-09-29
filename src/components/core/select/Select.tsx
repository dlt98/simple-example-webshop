import ReactSelect, { SingleValue } from "react-select";
import { ISingleSelectItem } from "./types";
import closeIcon from "@/assets/icons/png/close-icon.png";
import { Button, BUTTON_VARIANT } from "../button";

interface IProps {
  id: string;
  selectedItem: ISingleSelectItem | null;
  options: ISingleSelectItem[];
  onChange: (newValue: SingleValue<ISingleSelectItem>) => void;
  isLoading?: boolean;
  isClearable?: boolean;
  placeholder?: string;
  label?: string;
}

export const Select = ({
  selectedItem,
  options,
  onChange,
  isLoading,
  isClearable,
  placeholder,
  label,
  id,
}: IProps) => {
  return (
    <div>
      {!!label && (
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
        </label>
      )}
      <div className="flexCenter">
        <ReactSelect
          id={id}
          options={options}
          onChange={onChange}
          value={selectedItem}
          isLoading={isLoading}
          isSearchable
          placeholder={placeholder}
        />
        {!!isClearable && (
          <Button
            variant={BUTTON_VARIANT.ICON}
            onClick={() => onChange(null)}
            className="size-5"
          >
            <img src={closeIcon} alt="clear button" />
          </Button>
        )}
      </div>
    </div>
  );
};
