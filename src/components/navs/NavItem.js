
import classNames from "classnames/bind";

import images from "../../assets/images";
import styles from "./nav_item.module.scss";

const cx = classNames.bind(styles);

function NavItem(props) {
    return (
        <div className={cx('d-flex', 'wrapper')}>
            <img className={cx('icon')} src={props.icon} alt={props.title}/>
            <div className={cx('title')}>
                {props.title}
            </div>
            {props.haveChildren && <img src={images.next} alt='next'/>}
        </div>
    );
}

export default NavItem;