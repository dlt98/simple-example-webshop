import { ReactNode } from "react";
import Navigation from "./navigation/Navigation";
import { Footer } from "./footer";

interface IProps {
  children: ReactNode;
}
const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navigation />
      <main className="flex-grow p-8">
        <h1 className="mb-4 text-3xl font-bold">Welcome to our website</h1>
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
