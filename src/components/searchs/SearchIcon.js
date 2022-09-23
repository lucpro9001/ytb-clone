import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import images from "../../assets/images";
import styles from "./scss/search.module.scss";

const cx = classNames.bind(styles);
function SearchIcon() {
  return (
    <div className={cx("search")}>
      <Tippy content={"Tìm kiếm"}>
        <img
          className={cx("cursor-pointer")}
          src={images.search}
          alt="search"
        />
      </Tippy>
      <Tippy content={"Tìm kiếm bằng giọng nói"} interactive>
        <div className={cx("cursor-pointer", cx("mic"))}>
          <img src={images.mic} alt="mic" />
        </div>
      </Tippy>
    </div>
  );
}
