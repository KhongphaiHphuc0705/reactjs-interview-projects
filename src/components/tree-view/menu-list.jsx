import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return <ul>{list && list.length ? list.map((item) => <MenuItem item={item} />) : null}</ul>;
}
