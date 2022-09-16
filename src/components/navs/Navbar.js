import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import images from "../../assets/images";
import styles from "./Navbar.module.scss";
import routes from "../../configs/routes";
import Icon from "./Icon";

const cx = classNames.bind(styles);

function Navbar(props) {
  const classes = cx("wrapper", {
    hidden: props.hidden,
    fixed: props.fixed,
  });
  return (
    <div className={classes}>
      <Link to={routes.home}>
        <Icon icon={images.home} title="Home" />
      </Link>
      <Link to={'#'}>
        <Icon icon={images.trend} title="Trending" />
      </Link>
      <Link to={'#'}>
        <Icon icon={images.short} title="Short" />
      </Link>
    </div>
  );
}

export default Navbar;
