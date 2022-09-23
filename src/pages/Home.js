import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useState } from "react";

import Button from "../components/buttons/Button";
import Card from "../components/cards/Card";
import styles from "./home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const [widthSuggestion, setWidthSuggestion] = useState(0);
  const ref = useRef(null);

  function handleResizeWindow() {
    setWidthSuggestion(ref.current.offsetWidth);
  }
  useEffect(() => {
    setWidthSuggestion(ref.current.offsetWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);
  return (
    <>
      <div ref={ref} className={cx("center")}>
        <div className={cx("suggestion")} style={{ width: widthSuggestion }}>
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
      <div className={cx("content")}>
      <Card
          link={"/"}
          src={
            "https://i.ytimg.com/vi/DgRrrOt0Vr8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfDptSx4xK2WuuPtmcn-aurVx4lw"
          }
          avatar={
            "https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s68-c-k-c0x00ffffff-no-rj"
          }
          title={
            "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
          }
          name={"peniz"}
          view={1000}
          date={"2 days"}
        />
        <Card
          link={"/"}
          src={
            "https://i.ytimg.com/vi/DgRrrOt0Vr8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfDptSx4xK2WuuPtmcn-aurVx4lw"
          }
          avatar={
            "https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s68-c-k-c0x00ffffff-no-rj"
          }
          title={
            "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
          }
          name={"peniz"}
          view={1000}
          date={"2 days"}
        />
        <Card
          link={"/"}
          src={
            "https://i.ytimg.com/vi/DgRrrOt0Vr8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfDptSx4xK2WuuPtmcn-aurVx4lw"
          }
          avatar={
            "https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s68-c-k-c0x00ffffff-no-rj"
          }
          title={
            "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
          }
          name={"peniz"}
          view={1000}
          date={"2 days"}
        />
        <Card
          link={"/"}
          src={
            "https://i.ytimg.com/vi/DgRrrOt0Vr8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfDptSx4xK2WuuPtmcn-aurVx4lw"
          }
          avatar={
            "https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s68-c-k-c0x00ffffff-no-rj"
          }
          title={
            "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
          }
          name={"peniz"}
          view={1000}
          date={"2 days"}
        />
        <Card
          link={"/"}
          src={
            "https://i.ytimg.com/vi/DgRrrOt0Vr8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfDptSx4xK2WuuPtmcn-aurVx4lw"
          }
          avatar={
            "https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s68-c-k-c0x00ffffff-no-rj"
          }
          title={
            "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
          }
          name={"peniz"}
          view={1000}
          date={"2 days"}
        />
        <Card
          link={"/"}
          src={
            "https://i.ytimg.com/vi/DgRrrOt0Vr8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfDptSx4xK2WuuPtmcn-aurVx4lw"
          }
          avatar={
            "https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s68-c-k-c0x00ffffff-no-rj"
          }
          title={
            "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
          }
          name={"peniz"}
          view={1000}
          date={"2 days"}
        />
      </div>
    </>
  );
}

export default Home;
