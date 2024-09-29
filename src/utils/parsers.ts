import { ISingleSelectItem } from "../components/core/select/types";
import { IAllCAtegoriesRes } from "../types";

export const parseCategoriesToSelect = (
  categories?: IAllCAtegoriesRes,
): ISingleSelectItem[] | undefined => {
  return categories?.map(({ name, slug }) => ({
    label: name,
    value: slug,
  }));
};
