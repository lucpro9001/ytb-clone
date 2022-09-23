import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import routes from "../../configs/routes";
import images from "../../assets/images";
import Button from "../buttons/Button";
import styles from "./header.module.scss";
import Search from "../searchs/Search";
import Menu from "../menus/Menu";
import NavItem from "../navs/NavItem";
import Divider from "../menus/Divider";

const cx = classNames.bind(styles);

const menuItems = [
  { 
    component: {
      type: NavItem
    }
  },
];

function Header(props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("d-flex", "header")}>
        <img src={images.nav} alt="cate" className={styles.cate} />
        <div className={styles.logo}>
          <Link to={routes.home}>
            <img src={images.logo} alt="logo" />
          </Link>
          <span className={styles.country_code}>VN</span>
        </div>
      </div>

      <div className={cx("search")}>
        <Search />
      </div>

      <div className={cx("font-weight-5", "d-flex", "login")}>
        <Menu data={[]}>
          <>
            <Tippy content={"Cài đặt"} interactive>
              <img
                className={cx("menu", "cursor-pointer")}
                src={images.menu}
                alt="menu"
              />
            </Tippy>
          </>
        </Menu>
        <Button white secondary outline small>
          <img src={images.user} alt="user" />
          <div>&nbsp; ĐĂNG NHẬP</div>
        </Button>
      </div>
    </div>
  );
}

export default Header;
