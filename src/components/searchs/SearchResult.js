import classNames from "classnames/bind";


import images from "../../assets/images";
import styles from "./scss/search_result.module.scss";

const cx = classNames.bind(styles);


function SearchResult(props) {

    return (
        <div className={cx('wrapper', 'd-flex')}>
            <img src={images["sm-search"]} alt='history'/>
            <p>
                abc<b>defu</b>
            </p>
        </div>
    );
}

export default SearchResult;