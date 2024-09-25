import { ISingleMenuItem } from "../types";

const SingleNavigationItem = ({ link, title }: ISingleMenuItem) => {
  return (
    <li>
      <a href={link} className="text-foreground hover:text-primary">
        {title}
      </a>
    </li>
  );
};

export default SingleNavigationItem;
