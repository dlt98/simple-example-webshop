import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, loginUser, refreshAccessToken } from "@/api";
import { IUser } from "@/types";
import { useCookies } from "react-cookie";
import { AUTH_KEYS } from "@/constants";

enum COOKIE_NAMES {
  accessToken = "access_token",
  refreshToken = "refresh_token",
}

const ALL_COOKIE_KEYS = [COOKIE_NAMES.accessToken, COOKIE_NAMES.refreshToken];

export const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(ALL_COOKIE_KEYS);

  const queryClient = useQueryClient();

  const login = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data);
      queryClient.setQueryData([AUTH_KEYS.user], data);

      const { accessToken, refreshToken } = data || {};

      if (accessToken) setCookie(COOKIE_NAMES.accessToken, accessToken);
      if (refreshToken) setCookie(COOKIE_NAMES.refreshToken, refreshToken);
    },
  });

  const logout = () => {
    setUser(null);
    removeCookie(COOKIE_NAMES.accessToken);
    removeCookie(COOKIE_NAMES.refreshToken);
    queryClient.clear();
  };

  const refreshTokens = async () => {
    const refreshToken = cookies.refresh_token;
    if (!refreshToken) return null;

    const response = await refreshAccessToken(refreshToken);
    return response.accessToken;
  };

  const { isLoading: userLoading } = useQuery({
    queryKey: [AUTH_KEYS.user],
    queryFn: async () => {
      const { access_token } = cookies;
      if (!access_token) return null;

      try {
        const response = await getCurrentUser(access_token);

        return response;
      } catch (error) {
        const newAccessToken = await refreshTokens();

        if (newAccessToken) {
          setCookie(COOKIE_NAMES.accessToken, newAccessToken);
          return await getCurrentUser(newAccessToken);
        }

        throw error;
      }
    },
    enabled: !!cookies.access_token,
  });

  return {
    user,
    login,
    logout,
    isLoading: userLoading || login.isPending,
    isError: login.isError,
  };
};
