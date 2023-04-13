import { MouseEventHandler, ReactNode } from "react";
import menuItemStyle from "./MenuItem.style";
import { useSelectMenu } from "../SelectMenu";

interface MenuItemProps {
  value: string;
  children: ReactNode;
}

export default function MenuItem({ value, children }: MenuItemProps) {
  const { onChange, setInnerLabel } = useSelectMenu();

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    onChange?.(e.target.dataset.value);
    setInnerLabel(e.target.innerText);
  };

  return (
    <li
      data-value={value}
      className={menuItemStyle.option}
      onClick={handleClick}
    >
      <span className={menuItemStyle.optionText}>{children}</span>
    </li>
  );
}
