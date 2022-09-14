import { useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./input.module.scss";
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Input(props) {
  const [input, setInput] = useState("");
  const [closeState, setCloseState] = useState(false);
  const ref = useRef(null);
  const classes_input = cx("input");

  function handleInput(e) {
    const searchString = e.target.value;
    setInput(searchString);
    if(searchString.length > 0) {
        setCloseState(true);
    } else {
        setCloseState(false);
    }
  }

  const handleSearchClick = () => {
    ref.current.focus();
  };
  const handleCloseClick = () => {
    setInput("");
    setCloseState(false);
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
        className={cx("cursor-pointer", { close: closeState })}
        onClick={handleCloseClick}
      />
    </div>
  );
}

export default Input;
