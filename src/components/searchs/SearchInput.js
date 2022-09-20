import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from "./search_input.module.scss";
import images from "../../assets/images";
import SearchResult from "./SearchResult";

const cx = classNames.bind(styles);

function Input(props) {
  const [input, setInput] = useState("");
  const [width, setWidth] = useState(0);
  const [searchResult, setSearchResult] = useState([1, 2]);
  const [showResult, setshowResult] = useState(false);

  const input_ref = useRef(null);
  const wrapper_ref = useRef(null);
  const classes_input = cx("input");

  function handleInput(e) {
    const searchString = e.target.value;
    setInput(searchString);
  }

  const handleSearchClick = () => {
    input_ref.current.focus();
  };
  const handleCloseClick = () => {
    setInput("");
    input_ref.current.focus();
  };

  const handleClickOutSide = () => {
    setshowResult(false);
  };

  function handleResizeWindow() {
    setWidth(wrapper_ref.current.offsetWidth);
  }

  useEffect(() => {
    setWidth(wrapper_ref.current.offsetWidth - 24);
    
    window.addEventListener("resize", handleResizeWindow)
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  return (
    <>
      <Tippy
        interactive
        onClickOutside={handleClickOutSide}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <ul className={"my-box"} tabIndex="-1" {...attrs} style={{width: width}}>
            {searchResult.map((e, i) => {
              return <li key={i}><SearchResult content={e}/></li>
            })}
          </ul>
        )}
        
      >
        <div ref={wrapper_ref} className={cx("wrapper")}>
          <img
            className={cx("search")}
            onClick={handleSearchClick}
            src={images["sm-search"]}
            alt="search"
          />

          <input
            ref={input_ref}
            placeholder={props.placehoder}
            className={classes_input}
            value={input}
            onChange={(e) => handleInput(e)}
            onFocus={() => setshowResult(true)}
          />

          <img
            src={images.close}
            alt="close"
            className={cx("cursor-pointer", { close: input.length > 0 })}
            onClick={handleCloseClick}
          />
        </div>
      </Tippy>
    </>
  );
}

export default Input;
