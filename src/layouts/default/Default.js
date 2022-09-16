import classNames from "classnames/bind";

import Header from "../../components/headers/Header";
import Navbar from "../../components/navs/Navbar";

import styles from "./default.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        <Navbar fixed />
        <div className={cx("content")}>{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
