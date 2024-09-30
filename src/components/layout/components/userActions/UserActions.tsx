"use client";

import { useAuth } from "@/hooks";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { HARDCODED_USER } from "./constants";
import { Button, BUTTON_VARIANT } from "@/components/core";

export const UserAuthButton = () => {
  const { user, login, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogin = () => {
    login.mutateAsync(HARDCODED_USER);
  };

  const handleLogout = () => {
    logout();
  };

  const buttonClasses = twMerge(
    "w-max rounded-md px-5 transition-colors duration-200",
    user
      ? "bg-gray-200 hover:bg-gray-300"
      : "bg-blue-500 text-white hover:bg-blue-600",
  );

  return (
    <div className="relative">
      {user ? (
        <Button
          variant={BUTTON_VARIANT.CTA}
          className={buttonClasses}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          aria-haspopup="true"
          aria-expanded={showDropdown}
        >
          <img
            src={user.image}
            alt={`${user.username}'s profile`}
            className="size-8 rounded-full"
          />
        </Button>
      ) : (
        <Button
          variant={BUTTON_VARIANT.ICON}
          className={buttonClasses}
          onClick={handleLogin}
        >
          Log In
        </Button>
      )}

      {!!user && (
        <div
          className={twMerge(
            "absolute right-0 z-10 w-48 rounded-md bg-white py-1 pt-1 shadow-lg",
            "origin-top-right transition-all duration-300 ease-in-out",
            showDropdown
              ? "scale-100 transform opacity-100"
              : "pointer-events-none scale-95 transform opacity-0",
          )}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Button
            variant={BUTTON_VARIANT.ICON}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
};
