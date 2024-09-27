import { ISingleSelectItem } from "../../../core";

export const findCategoryItem = (
  categories: ISingleSelectItem[],
  queryParam: string | null,
) => {
  if (!queryParam) return;

  return categories.find((category) => category.value === queryParam);
};
