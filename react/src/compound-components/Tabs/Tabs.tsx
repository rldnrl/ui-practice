import { createContext, ReactNode, useContext } from "react";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";

interface TabsContextType {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

export const useTabContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      `Tabs components cannot be rendered outside the TabsProvider`
    );
  }

  return context;
};

interface TabsProps extends TabsContextType {
  children?: ReactNode;
}

export default function Tabs({ activeTab, onTabChange, children }: TabsProps) {
  return (
    <TabsContext.Provider value={{ activeTab, onTabChange }}>
      {children}
    </TabsContext.Provider>
  );
}

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
