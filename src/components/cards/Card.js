import styles from "./card.module.scss";
import classNames from "classnames/bind";
import images from "../../assets/images";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Card(props) {
  return (
    <Link to={props.link}>
      <div className={cx("wrapper")}>
        <img className={cx("thumpnail")} src={props.src} alt="thump" />
        <div className={cx("detail")}>
          <img className={cx("avatar")} src={props.avatar} alt="avatar" />
          <div className={cx("detail-center")}>
            <div className={cx("title")}>{props.title}</div>
            <div className={cx("chanel-name")}>{props.name}</div>
            <p className={cx("view")}>
              {props.view} views • {props.date}
            </p>
          </div>
          <img className={cx("menu")} src={images.menu} alt="menu" />
        </div>
      </div>
    </Link>
  );
}

export default Card;
