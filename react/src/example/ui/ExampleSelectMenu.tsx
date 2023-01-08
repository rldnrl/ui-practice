import { useCallback, useState } from "react";
import { Field } from "../../types/field";
import SelectMenu from "../../ui/SelectMenu";

const fields: Field[] = [
  {
    value: "github",
    label: "Github",
  },
  {
    value: "instagram",
    label: "Instagram",
  },
  {
    value: "youtube",
    label: "Youtube",
  },
  {
    value: "leetcode",
    label: "LeetCode",
  },
];

export default function ExampleSelectMenu() {
  const [selectedField, setSelectedField] = useState<Field>();

  const handleSelect = useCallback((field?: Field) => {
    setSelectedField(field);
  }, []);

  return (
    <SelectMenu
      fields={fields}
      selectedField={selectedField}
      onSelect={handleSelect}
    />
  );
}
