import { useRef, InputHTMLAttributes, ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onClear?: () => void;
  className?: string;
  value: string;
  setValue: (value: string) => void;
}

export const Input = ({
  label,
  onClear,
  className,
  onChange,
  id,
  value,
  setValue,
  ...props
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setValue("");
    inputRef.current?.focus();

    onClear?.();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    onChange?.(e);
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="flexCenter relative">
        <input
          {...props}
          ref={inputRef}
          value={value}
          onChange={handleChange}
          className={twMerge(
            "block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
            value && "pr-7",
            className,
          )}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            aria-label="Clear input"
          >
            <span className="text-xl" aria-hidden="true">
              ×
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
