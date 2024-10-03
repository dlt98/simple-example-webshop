import {
  API_FILTER_KEYS,
  API_FILTER_REPLACEMENT_KEYS,
  FILTER_QUERY_KEYS,
} from "@/constants";
import { IProductQueryParams } from "@/hooks";

const DEFAULT_VALUES = {
  [FILTER_QUERY_KEYS.limit]: 20,
  [FILTER_QUERY_KEYS.page]: 1,
};

export const appendToUrl = (
  baseUrl: string,
  queryInitial: IProductQueryParams | null,
) => {
  const searchParams = new URLSearchParams(window.location.search);
  const query = replaceFilterKeys(queryInitial);

  console.log("query", query);

  if (query?.category) {
    baseUrl = `${baseUrl}/category/${query.category}`;

    searchParams.delete(FILTER_QUERY_KEYS.category);
    delete query.category;
  }

  if (query?.[API_FILTER_KEYS.search]) {
    baseUrl = `${baseUrl}/search`;

    searchParams.delete(FILTER_QUERY_KEYS.search);
  }

  addDefaultValues(searchParams);

  if (queryInitial) addQueryDataToQueryParams(query, searchParams);

  const newQueryString = searchParams.toString();

  const res = `${baseUrl}${newQueryString ? `?${newQueryString}` : ""}`;

  console.log("res", res);
  console.log("-----");
  return res;
};

function addDefaultValues(searchParams: URLSearchParams) {
  Object.entries(DEFAULT_VALUES).forEach(([key, value]) => {
    if (!searchParams.has(key)) {
      console.log("key", key);
      console.log("value", value);

      searchParams.append(key, value.toString());
    }
  });
}

function addQueryDataToQueryParams(query: any, searchParams: URLSearchParams) {
  Object.entries(query).forEach(([key, value]) => {
    searchParams.set(key, value as string);
  });
}

// function replaceFilterKeys(query: any) {
//   const newQuery = { ...query };

//   Object.keys(query).forEach((key) => {
//     if (API_FILTER_REPLACEMENT_KEYS[key]) {
//       if (key === FILTER_QUERY_KEYS.page) {
//         const pageAmount = newQuery[key];
//         const skip = (pageAmount - 1) * DEFAULT_VALUES[API_FILTER_REPLACEMENT_KEYS.limit]; // Calculate skip based on current page
//         newQuery[API_FILTER_REPLACEMENT_KEYS[key]] = skip;
//       } else {
//         newQuery[API_FILTER_REPLACEMENT_KEYS[key]] = newQuery[key];
//       }

//       delete newQuery[key];
//     }
//   });

//   return newQuery;
// }

export const replaceFilterKeys = (query: any | null) => {
  if (!query) return query;

  const newQuery = { ...query };

  Object.keys(query).forEach((key) => {
    if (API_FILTER_REPLACEMENT_KEYS[key]) {
      newQuery[API_FILTER_REPLACEMENT_KEYS[key]] = newQuery[key];
      delete newQuery[key];
    }
  });

  return newQuery;
};
