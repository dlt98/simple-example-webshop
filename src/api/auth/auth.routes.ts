import { BASE_ROUTE } from "../routes";

const BASE_AUTH_ROUTE = `${BASE_ROUTE}/auth`;
export const AUTH_ROUTES = {
  login: `${BASE_AUTH_ROUTE}/login`,
  currentUser: `${BASE_AUTH_ROUTE}/me`,
  refresh: `${BASE_AUTH_ROUTE}/refresh`,
};
