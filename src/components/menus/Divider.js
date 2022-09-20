import classNames from "classnames/bind";

import styles from "./divider.module.scss";

const cx = classNames.bind(styles);
function Divider(props) {

    return (
        <div className={cx('wrapper')} />
    );
}

export default Divider;
