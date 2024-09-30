import { IUser, IUserCredentials } from "@/types";
import { AUTH_ROUTES } from "./auth.routes";

export const loginUser = async (
  username: string,
  password: string,
  expiresInMins: number = 60,
): Promise<IUser | null> => {
  const response = await fetch(AUTH_ROUTES.login, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, expiresInMins }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const getCurrentUser = async (
  accessToken: string,
): Promise<IUser | null> => {
  const response = await fetch(AUTH_ROUTES.currentUser, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const refreshAccessToken = async (
  refreshToken: string,
  expiresInMins: number = 30,
): Promise<IUserCredentials> => {
  const response = await fetch(AUTH_ROUTES.refresh, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken, expiresInMins }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
