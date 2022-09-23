import classNames from "classnames/bind";

import images from "../../assets/images";
import styles from "./scss/nav_item.module.scss";

const cx = classNames.bind(styles);

function NavItem(props) {
  return (
    <div className={cx("d-flex", "wrapper")}>
      <div className={cx("icon")}>
        {props.icon && <img src={props.icon} alt={props.title} />}
      </div>
      <div className={cx("title")}>{props.title}</div>
      {props.haveChildren && <img src={images.next} alt="next" />}
    </div>
  );
}

export default NavItem;
