import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import selectMenuStyle from "./SelectMenu.style";
import useOutsideClick from "../../hooks/useOutsideClick";

interface SelectMenuContextType {
  innerLabel: string;
  setInnerLabel: Dispatch<SetStateAction<string>>;
  onChange?: (value: any) => void;
}

export const SelectMenuContext = createContext<SelectMenuContextType>({
  innerLabel: "",
  setInnerLabel: () => {},
  onChange: () => {},
});

export const useSelectMenu = () => useContext(SelectMenuContext);

interface SelectMenuProps {
  label: string;
  value?: string | number;
  onChange?: (value: any) => void;
  children?: ReactNode;
}

export default function SelectMenu({
  label,
  onChange,
  children,
}: SelectMenuProps) {
  const divContainerRef = useRef<HTMLDivElement | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [innerLabel, setInnerLabel] = useState<string>(label);

  useOutsideClick(divContainerRef, () => setToggle(false), "mousedown");

  const onToggle = useCallback(
    () => setToggle((prevToggle) => !prevToggle),
    []
  );

  const handleClick = useCallback((value: any) => {
    onChange?.(value);
    setToggle(false);
  }, []);

  return (
    <SelectMenuContext.Provider
      value={{
        innerLabel,
        setInnerLabel,
        onChange: handleClick,
      }}
    >
      <div ref={divContainerRef} className={selectMenuStyle.selectMenu}>
        <div className={selectMenuStyle.selectButton} onClick={onToggle}>
          <span>{innerLabel}</span>
          <i className={`bx bx-chevron-down ${selectMenuStyle.icon(toggle)}`} />
        </div>
        <ul className={selectMenuStyle.options(toggle)}>{children}</ul>
      </div>
    </SelectMenuContext.Provider>
  );
}
