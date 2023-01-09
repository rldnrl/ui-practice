import { useCallback, useState } from "react";
import SelectMenu from "../../compound-components/SelectMenu";
import MenuItem from "../../compound-components/MenuItem";

export default function ExampleSelectMenu() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const onChange = useCallback((value: string) => {
    setSelectedValue(value);
  }, []);

  return (
    <SelectMenu
      label="Select your option"
      value={selectedValue}
      onChange={onChange}
    >
      <MenuItem value="github">Github</MenuItem>
      <MenuItem value="instagram">Instagram</MenuItem>
      <MenuItem value="youtube">Youtube</MenuItem>
      <MenuItem value="leetcode">LeetCode</MenuItem>
    </SelectMenu>
  );
}
