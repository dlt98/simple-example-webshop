export const generateSortQuery = (sortBy: string, order?: string) => {
  return [
    { key: "sortBy", value: order ? sortBy : undefined }, // If there is no order then remove the sort by as well
    { key: "order", value: order },
  ];
};
