import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import images from "../../assets/images";
import styles from "./scss/navfull.module.scss";
import NavItem from "./NavItem";
import Divider from "../menus/Divider";
import Button from "../buttons/Button";

const cx = classNames.bind(styles);
function NavbarFull(props) {
  return (
    <div className={cx("wrapper")}>
      <NavItem title="Trang chủ" icon={images["home-active"]} />
      <NavItem title="Khám phá" icon={images.trend} />
      <NavItem title="Short" icon={images.short} />
      <NavItem title="Kênh đăng ký" icon={images.subcriber} />
      <Divider />
      <NavItem title="Thư viện" icon={images.libary} />
      <NavItem title="Video đã xem" icon={images.history} />
      <Divider />
      <div className={cx("label")}>
        Hãy đăng nhập để thích video, bình luận và đăng ký kênh.
        <br />
        <br />
        <Button white secondary outline small>
          <img src={images.user} alt="user" />
          <div>&nbsp; ĐĂNG NHẬP</div>
        </Button>
      </div>
      <Divider />
      <h3 className={cx("nav-header")}>KHÁM PHÁ</h3>
      <NavItem title="Âm nhạc" icon={images.music} />
      <NavItem title="Thể thao" icon={images.sport} />
      <NavItem title="Trò chơi" icon={images.game} />
      <NavItem title="Tin tức" icon={images.new} />
      <NavItem title="Video 360&#176;" icon={images.video} />
      <Divider />
      <h3 className={cx("nav-header")}>dịch vụ khác của youtube</h3>
      <NavItem title="Youtube music" icon={images["play-red"]} />
      <NavItem title="Youtube Kids" icon={images["play-rec-red"]} />
      <NavItem title="Youtube TV" icon={images["tivi-red"]} />
      <Divider />
      <NavItem title="Cài đặt" icon={images.setting} />
      <NavItem title="Nhật ký báo cáo" icon={images.flag} />
      <NavItem title="Trợ giúp" icon={images.question} />
      <NavItem title="Gửi phản hồi" icon={images.feedback} />
      <Divider />
      <div className={cx("copy-right")}>© 2022 Google LLC</div>
    </div>
  );
}

export default NavbarFull;
