import { useState, ReactNode } from "react";
import NavigationItems from "./components/NavigationItems";

interface ButtonProps {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
}

const Button = ({
  variant = "default",
  size = "default",
  className = "",
  children,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variantClasses =
    variant === "ghost"
      ? "hover:bg-accent hover:text-accent-foreground"
      : "bg-primary text-primary-foreground hover:bg-primary/90";
  const sizeClasses = size === "icon" ? "h-10 w-10" : "h-10 px-4 py-2";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

const Sheet = ({ open, onOpenChange, children }: SheetProps) => {
  return (
    <>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
      )}
    </>
  );
};

interface SheetContentProps {
  children: ReactNode;
}

const SheetContent = ({ children }: SheetContentProps) => {
  return (
    <div
      className={`bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right fixed inset-y-0 right-0 z-50 h-full w-3/4 gap-4 border-l p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 sm:max-w-sm`}
    >
      {children}
    </div>
  );
};

const SheetHeader = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col space-y-2 text-center sm:text-left">
    {children}
  </div>
);

const SheetTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-semibold text-foreground">{children}</h3>
);

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-background">
      <div className="text-2xl font-bold">Logo</div>
      <NavigationItems />
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <Button
          variant="ghost"
          size="icon"
          className="order-2 md:order-3"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open shopping cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </Button>
        {isSidebarOpen && (
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <p>Your cart is empty.</p>
            </div>
            <Button
              className="mt-4"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close shopping cart"
            >
              Close
            </Button>
          </SheetContent>
        )}
      </Sheet>
    </header>
  );
}
