import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menu from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tabs-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseFetchTest from "./components/use-fetch/test";
import UseOutsideClickTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-bottom";
import ScrollToSection from "./components/scroll-to-top-bottom/scroll-to-section";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menu={menu} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchTest /> */}
      {/* <UseOutsideClickTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      <ScrollToSection />
    </>
  );
}

export default App;
