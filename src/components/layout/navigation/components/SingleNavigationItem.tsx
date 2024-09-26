import { ISingleMenuItem } from "../types";

const SingleNavigationItem = ({ link, title }: ISingleMenuItem) => {
  return (
    <li>
      <a
        href={link}
        className="rounded-full px-6 py-2 text-lg font-semibold transition-all hover:bg-slate-300 md:text-white md:hover:bg-slate-700"
      >
        {title}
      </a>
    </li>
  );
};

export default SingleNavigationItem;
