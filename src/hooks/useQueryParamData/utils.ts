import { URL_CHANGE_EVENT } from "./constants";

export const dispatchUrlChangeEvent = () => {
  window.dispatchEvent(new Event(URL_CHANGE_EVENT));
};

export const updateURL = (newSearchParams: URLSearchParams) => {
  const parsedSearchParams = newSearchParams.toString();
  const newUrl = `${window.location.pathname}${parsedSearchParams ? `?${parsedSearchParams}` : ""}`;

  // Only update the URL if it has changed
  if (window.location.search !== parsedSearchParams) {
    window.history.pushState({}, "", newUrl);
  }
};
