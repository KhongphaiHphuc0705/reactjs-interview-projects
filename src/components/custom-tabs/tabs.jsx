import { useState } from "react";
import "./styles.css";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = (index) => {
    setCurrentTab(index);
    onChange(index);
  };

  return (
    <>
      <div className="heading">
        {tabsContent.map((tab, index) => (
          <div className={`tab-item ${currentTab === index ? "active" : ""}`} onClick={() => handleClick(index)} key={tab.label}>
            <span className="label">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="content">{tabsContent[currentTab] && tabsContent[currentTab].content}</div>
    </>
  );
}
