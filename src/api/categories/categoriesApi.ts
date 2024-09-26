import { CATEGORY_ROUTES } from ".";
import { IAllCAtegoriesRes } from "../../types";

export const fetchAllCategories = async (): Promise<IAllCAtegoriesRes> => {
  const response = await fetch(CATEGORY_ROUTES.allCategories);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
