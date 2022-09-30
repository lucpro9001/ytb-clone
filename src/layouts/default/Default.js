import classNames from "classnames/bind";

import Header from "../../components/headers/Header";
import Navbar from "../../components/navs/Navbar";
import NavbarFull from "../../components/navs/NavFull";
import { useStore, actions } from "../../store";

import styles from "./default.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const [state] = useStore();
  const { toggleNav } = state;
  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        {toggleNav || <Navbar fixed />}
        {toggleNav && <NavbarFull />}
        <div className={cx("content", { toggleNav })}>{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
