import ReactSelect from "react-select";
import { ISingleSelectItem } from "./types";

interface IProps {
  options: ISingleSelectItem[];
  onChange: () => ISingleSelectItem;
}

export const Select = ({ options, onChange }: IProps) => {
  return <ReactSelect options={options} onChange={onChange} />;
};
