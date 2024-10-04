export const FILTER_QUERY_KEYS = {
  category: "category",
  search: "search",
  sortBy: {
    title: "title",
    price: "price",
  },
  page: "page",
  limit: "limit",
};

// Used for changing the frontend api query keys to ones that are accepted for the backend
export const API_FILTER_REPLACEMENT_KEYS = {
  [FILTER_QUERY_KEYS.search]: "q",
  [FILTER_QUERY_KEYS.page]: "skip",
};

export const API_FILTER_KEYS = {
  category: "category",
  search: "q",
  sortBy: {
    title: "title",
    price: "price",
  },
  skip: "skip",
};
