import { ReactNode } from "react";
import { Footer, Navigation, ScrollToTop } from "./components";
import { twMerge } from "tailwind-merge";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: IProps) => {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <main className="flex-grow p-8">
        <h1 className="mb-4 text-3xl font-bold">The best online web shop</h1>
        <div className={twMerge("container mx-auto", className)}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};
