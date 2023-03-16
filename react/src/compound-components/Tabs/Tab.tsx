import { css } from "@emotion/css";
import { ReactNode } from "react";
import { useTabContext } from "./Tabs";

interface TabProps {
  value: string;
  children: ReactNode;
}

export default function Tab({ value, children }: TabProps) {
  const { activeTab, onTabChange } = useTabContext();

  const isActive = activeTab === value;

  return (
    <button onClick={() => onTabChange(value)} className={tabStyle(isActive)}>
      {children}
    </button>
  );
}

const tabStyle = (isActive: boolean) => css`
  outline: transparent solid 2px;
  outline-offset: 2px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: transparent;
  margin-bottom: -1px;
  --tabs-border-color: transparent;
  background: white;
  color: ${isActive ? "#2b6cb0" : "black"};
`;
