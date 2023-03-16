import { css } from "@emotion/css";
import { ReactNode } from "react";
import { useTabContext } from "./Tabs";

interface TabPanelProps {
  value: string;
  children: ReactNode;
}

export default function TabPanel({ value, children }: TabPanelProps) {
  const { activeTab } = useTabContext();

  const isActive = value === activeTab;

  return (
    <>{isActive ? <div className={tabPanelStyle}>{children}</div> : null}</>
  );
}

const tabPanelStyle = css`
  padding: 1rem;
  outline: transparent solid 2px;
  outline-offset: 2px;
`;
