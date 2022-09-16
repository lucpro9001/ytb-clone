import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from "./input.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Input(props) {
  const [input, setInput] = useState("");
  const [width, setWidth] = useState(0);
  const [searchResult, setSearchResult] = useState([1, 2]);
  const [showResult, setshowResult] = useState(false);

  const ref = useRef(null);
  const classes_input = cx("input");

  function handleInput(e) {
    const searchString = e.target.value;
    setInput(searchString);
  }

  const handleSearchClick = () => {
    ref.current.focus();
  };
  const handleCloseClick = () => {
    setInput("");
    ref.current.focus();
  };

  const handleClickOutSide = () => {
    setshowResult(false);
  };
  useEffect(() => {
    setWidth(ref.current.offsetWidth - 13);
  }, []);

  useEffect(() => {
    function handleResizeWindow() {
      setWidth(ref.current.offsetWidth + 12);
    }
    window.addEventListener("resize", handleResizeWindow)
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, [width]);

  

  return (
    <>
      <Tippy
        maxWidth={width}
        interactive
        onClickOutside={handleClickOutSide}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={"my-box"} tabIndex="-1" {...attrs} style={{width: width}}>
            {searchResult.map((e, i) => {
              return <h1 key={i}>{e}</h1>;
            })}
          </div>
        )}
        
      >
        <div className={cx("wrapper")}>
          <img
            className={cx("search")}
            onClick={handleSearchClick}
            src={images["sm-search"]}
            alt="search"
          />

          <input
            ref={ref}
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
