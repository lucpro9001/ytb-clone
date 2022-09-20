import classNames from "classnames/bind";

import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

function Icon(props) {
  return (
    <div className={cx("d-flex", "nav-icon")}>
      <img src={props.icon} alt={props.title} />
      <span>{props.title}</span>
    </div>
  );
}

export default Icon;