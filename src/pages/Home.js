import classNames from "classnames/bind";

import Button from "../components/buttons/Button";
import styles from "./home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  let arr = [];
  for (let i = 0; i < 9999; i++) {
    arr.push("<br />");
  }
  return (
    <>
      <div className={cx("suggestion")}>
        <div className="d-flex justify-content-center">
          <div className={cx("tab")}>
            <Button gray rounded small active>
              Peniz
            </Button>
          </div>
          <div className={cx("tab")}>
            <Button gray rounded small>
              Penizizabezt
            </Button>
          </div>
        </div>
      </div>
      <div className={cx("content")}>{arr}</div>
    </>
  );
}

export default Home;
