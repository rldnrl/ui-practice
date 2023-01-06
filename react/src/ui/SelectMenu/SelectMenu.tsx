import { MouseEventHandler, useState } from "react";
import selectMenuStyle from "./SelectMenu.style";
import { Field } from "../../types/field";

interface SelectMenuProps {
  fields: Field[];
  selectedField?: Field;
  onSelect?: (field?: Field) => void;
}

export default function SelectMenu({
  fields,
  selectedField,
  onSelect,
}: SelectMenuProps) {
  const [toggle, setToggle] = useState(false);

  const onClick = () => setToggle((prevToggle) => !prevToggle);

  const handleSelectField: MouseEventHandler<HTMLLIElement> = (e) => {
    if (!(e.target instanceof HTMLLIElement)) {
      return;
    }

    const value = e.target.dataset.value as string;
    const label = e.target.dataset.label as string;

    onSelect?.({
      value,
      label,
    });
    setToggle(false);
  };

  return (
    <div className={selectMenuStyle.selectMenu}>
      <div className={selectMenuStyle.selectButton} onClick={onClick}>
        <span>{selectedField?.label ?? "Select your option"}</span>
        <i className={`bx bx-chevron-down ${selectMenuStyle.icon(toggle)}`}></i>
      </div>
      <ul className={selectMenuStyle.options(toggle)}>
        {fields.map((field) => (
          <li
            key={field.label}
            data-label={field.label}
            data-value={field.value}
            className={selectMenuStyle.option}
            onClick={handleSelectField}
          >
            <span className={selectMenuStyle.optionText}>{field.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
