import { twMerge } from "tailwind-merge";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "white";
  className?: string;
}

export const Spinner = ({
  size = "medium",
  color = "primary",
  className,
}: SpinnerProps) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  const colorClasses = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    white: "text-white",
  };

  const spinnerClasses = twMerge(
    "inline animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
    sizeClasses[size],
    colorClasses[color],
    className,
  );

  return (
    <div role="status" className="inline-block">
      <svg
        className={spinnerClasses}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="loading"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
