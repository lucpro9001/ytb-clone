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
import { actions, useStore } from "../../store";

const cx = classNames.bind(styles);

const menuItems = [
  // {
  //   component: {
  //     type: NavItem
  //   }
  // },
];

function Header(props) {
  const [state, dispatch] = useStore();
  const {darkMode} = state;
  function handleNav() {
    dispatch(actions.setToggleNav())
  }
  return (
    <div className={cx("wrapper", {
      dark: darkMode
    })}>
      <div className={cx("d-flex", "header")}>
        <img onClick={handleNav} src={darkMode ? images["nav-dark"] : images.nav } alt="cate" className={styles.cate} />
        <div className={styles.logo}>
          <Link to={routes.home}>
            <img src={darkMode ? images["logo-dark"] : images.logo } alt="logo" />
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
                src={darkMode ? images["menu-dark"] : images.menu }
                alt="menu"
              />
            </Tippy>
          </>
        </Menu>
        <Button gray={!darkMode} dark={darkMode} secondary outline small>
          <img src={images.user} alt="user" />
          <div>&nbsp; ĐĂNG NHẬP</div>
        </Button>
      </div>
    </div>
  );
}

export default Header;
