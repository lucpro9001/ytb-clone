import { useState } from "react";
import classNames from 'classnames/bind';

import styles from './input.module.scss';

const cx = classNames.bind(styles);

function Input(props) {
    const [input, setInput] = useState('');

    const classes_input = cx('input');

    function handleInput(e) {
        setInput(e.target.value);
    }
    return (
        <div className={cx('wrapper')}>
            <input placeholder={props.placehoder} className={classes_input} value={input} onChange={(e) => handleInput(e)}/>
        </div>
    );
}

export default Input;