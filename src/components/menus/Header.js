import classNames from "classnames/bind";

import images from "../../assets/images";
import styles from "./scss/header.module.scss";
import Divider from "./Divider";

const cx = classNames.bind(styles);
function MenuHeader(props) {
  return (
    <>
      <div className={cx("d-flex", "wrapper")}>
        <div className={cx("icon")}>
          <img src={images["left-arrow"]} alt={props.title} />
        </div>
        <div className={cx("title")}>{props.title}</div>
      </div>
      <Divider />
      <div className={cx("label")}>{props.label}</div>
    </>
  );
}

export default MenuHeader;
