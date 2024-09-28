export const generateSortQuery = (sortBy: string, order?: string) => {
  return [
    { key: "sortBy", value: sortBy },
    { key: "order", value: order },
  ];
};
