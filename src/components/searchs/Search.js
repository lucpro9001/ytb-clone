import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import images from "../../assets/images";
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import styles from "./search.module.scss";

const cx = classNames.bind(styles);

function Search(props) {
  return (
    <div className={cx("wrapper")}>
      <Input placehoder="Tìm kiếm" />
      <Tippy content={"Tìm kiếm"}>
        <span>
          <Button gray medium>
            <img src={images.search} alt="search" />
          </Button>
        </span>
      </Tippy>
      <Tippy content={"Tìm kiếm bằng giọng nói"} interactive>
        <div className={cx("cursor-pointer", cx("mic"))}>
          <img src={images.mic} alt="mic" />
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
