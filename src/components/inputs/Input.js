import { useRef, useState } from "react";
import classNames from 'classnames/bind';

import styles from './input.module.scss';
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Input(props) {
    const [input, setInput] = useState('');
    const ref = useRef(null);
    const classes_input = cx('input');

    function handleInput(e) {
        setInput(e.target.value);
    }

    const handleClick = () => {
        ref.current.focus();
    };

    return (
        <div className={cx('wrapper')}>
            <img onClick={handleClick} src={images["sm-search"]} alt='search' />
            <input ref={ref} placeholder={props.placehoder} className={classes_input} value={input} onChange={(e) => handleInput(e)}/>
        </div>
    );
}

export default Input;