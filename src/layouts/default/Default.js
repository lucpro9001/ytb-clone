import classNames from "classnames/bind";
import { useState } from "react";

import Header from "../../components/headers/Header";
import Navbar from "../../components/navs/Navbar";
import NavbarFull from "../../components/navs/NavFull";

import styles from "./default.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const [showNav, setShowNav] = useState(true);
  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        {showNav || <Navbar fixed />}
        {showNav && <NavbarFull />}
          <div className={cx("content", {showNav})}>{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
