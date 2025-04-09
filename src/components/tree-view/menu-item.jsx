import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  const handleToggleChildren = (label) => {
    setDisplayChildren((prev) => {
      return {
        ...prev,
        [label]: !prev[label],
      };
    });
  };

  console.log(displayChildren);

  return (
    <li>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>{displayChildren[item.label] ? <FaMinus /> : <FaPlus />}</span>
        ) : null}
      </div>
      {item && item.children && item.children.length && displayChildren[item.label] ? <MenuList list={item.children} /> : null}
    </li>
  );
}
