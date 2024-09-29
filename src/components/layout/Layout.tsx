import { ReactNode } from "react";
import { Footer, Navigation, ScrollToTop } from "./components";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <main className="flex-grow p-8">
        <h1 className="mb-4 text-3xl font-bold">The best online web shop</h1>
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};
