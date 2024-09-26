import ReactSelect, { SingleValue } from "react-select";
import { ISingleSelectItem } from "./types";

interface IProps {
  options: ISingleSelectItem[];
  onChange: (newValue: SingleValue<ISingleSelectItem>) => void;
}

export const Select = ({ options, onChange }: IProps) => {
  return <ReactSelect options={options} onChange={onChange} />;
};
