import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import images from "../../assets/images";
import Button from "../buttons/Button";
import Input from "./SearchInput";
import styles from "./scss/search.module.scss";
import { useStore } from "../../store";

const cx = classNames.bind(styles);

function Search(props) {
  const [state, dispatch] = useStore();
  const {darkMode} = state;
  return (
    <>
      <div className={cx("search-icon")}>
        <img className={cx("icon")} src={images.search} alt="search" />
        <img className={cx("icon")} src={images.mic} alt="mic" />
      </div>
      <div className={cx("wrapper")}>
      <Input placehoder="Tìm kiếm" />
      <Tippy content={"Tìm kiếm"}>
        <span>
          <Button gray={!darkMode} dark={darkMode} medium>
            <img src={darkMode ? images["search-dark"] : images.search} alt="search" />
          </Button>
        </span>
      </Tippy>
      <Tippy content={"Tìm kiếm bằng giọng nói"} interactive>
        <div className={cx("cursor-pointer", cx("mic", {
          dark: darkMode
        }))}>
          <img src={darkMode ? images["mic-dark"] : images.mic } alt="mic" />
        </div>
      </Tippy>
    </div>
    </>
  );
}

export default Search;
