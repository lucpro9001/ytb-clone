import { useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./input.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Input(props) {
  const [input, setInput] = useState("");
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

  return (
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
      />
      <img
        src={images.close}
        alt="close"
        className={cx("cursor-pointer", { close: input.length > 0 })}
        onClick={handleCloseClick}
      />
    </div>
  );
}

export default Input;
