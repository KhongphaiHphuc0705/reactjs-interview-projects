import { useState } from "react";
import Tabs from "./tabs";

export default function TabTest() {
  const [currentTab, setCurrentTab] = useState(0);

  const tabsContent = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>Content for Tab 3</div>,
    },
  ];

  const handleChange = () => {
    console.log(currentTab);
  };

  return <Tabs tabsContent={tabsContent} onChange={handleChange} />;
}
