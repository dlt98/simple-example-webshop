import { useState } from "react";
import { Input } from "../../../core";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  return <Input value={value} setValue={setValue} label="Search input" />;
};
