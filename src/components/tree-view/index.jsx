import MenuList from "./menu-list";
import menu from "./data.js";
import "./styles.css";

export default function TreeView({ menu = [] }) {
  return (
    <div className="menu-list-container">
      <MenuList list={menu} />
    </div>
  );
}
