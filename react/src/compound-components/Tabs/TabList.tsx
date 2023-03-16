import { css } from "@emotion/css";
import { ReactNode } from "react";

interface TabListProps {
  children: ReactNode;
}

export default function TabList({ children }: TabListProps) {
  return <ul className={tabListStyle}>{children}</ul>;
}

const tabListStyle = css`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: -1px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: inherit;
`;
