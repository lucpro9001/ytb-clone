import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";

import images from "../../assets/images";
import NavItem from "../navs/NavItem";
import Divider from "./Divider";
import MenuHeader from "./Header";
import styles from "./scss/menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ children, item = [], props }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickMenu = () => {
    setShowMenu(true);
  };
  const handleClickOutSide = () => {
    setShowMenu(false);
  };

  return (
    <>
      <Tippy
        interactive
        onClickOutside={handleClickOutSide}
        visible={showMenu}
        render={(attrs) => (
          <div className={"my-box"} tabIndex="-1" {...attrs}>
            <NavItem
              title={"Dữ liệu của bạn trong YouTube"}
              icon={images["user-shield"]}
            />
            <Divider />
            <NavItem haveChildren title={"Giao diện: Giao diện thiết bị"} icon={images.moon} />
            <NavItem haveChildren title={"Ngôn ngữ: Tiếng Việt"} icon={images.translate} />
            <NavItem haveChildren title={"Chế độ hạn chế: Đã tắt"} icon={images.shield} />
            <NavItem haveChildren title={"Địa điểm: Việt Nam"} icon={images.global} />
            <NavItem title={"Phím tắt"} icon={images.keyboard} />
            <Divider />
            <NavItem title={"Cài đặt"} icon={images.setting} />
            <Divider />
            <NavItem title={"Trợ giúp"} icon={images.question} />
            <NavItem title={"Gửi phản hồi"} icon={images.feedback} />
          </div>
        )}
      >
        <div onClick={handleClickMenu}>{children}</div>
      </Tippy>
    </>
  );
}

export default Menu;
