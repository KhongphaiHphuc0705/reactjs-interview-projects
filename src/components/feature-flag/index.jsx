import Accordion from "../accordion";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import menu from "../tree-view/data";
import TreeView from "../tree-view";
import { useContext } from "react";
import { FeatureFlagContext } from "./context/index.jsx";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "LightDarkMode",
      components: <LightDarkMode />,
    },
    {
      key: "TicTacToe",
      components: <TicTacToe />,
    },
    {
      key: "RandomColor",
      components: <RandomColor />,
    },
    {
      key: "Accordion",
      components: <Accordion />,
    },
    {
      key: "TreeView",
      components: <TreeView menu={menu} />,
    },
  ];

  const checkEnabledFlags = (flag) => {
    return enabledFlags[flag] ? enabledFlags[flag] : false;
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((item) => checkEnabledFlags(item.key) && item.components)}
    </div>
  );
}
