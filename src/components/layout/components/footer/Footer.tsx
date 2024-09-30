import { useRef } from "react";

const Footer = () => {
  const { current: dateYear } = useRef(new Date().getFullYear());
  return (
    <footer className="bg-slate-500 p-4 text-center">
      <p className="text-white">
        &copy; {dateYear} Your Company Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
