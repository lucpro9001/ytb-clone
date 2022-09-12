import styles from './button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({children, ...props}) {
    const classes = cx('btn', {
        primary: props.primary,
        secondary: props.secondary,
        white: props.white,
        'text-primary': props.primary && props.outline,
        'text-secondary': props.secondary && props.outline,
        outline: props.outline,
        text: props.text,
        disabled: props.disabled,
        rounded: props.rounded,
        'btn-small': props.small,
        'btn-medium': props.medium,
        'btn-large': props.large,
        ...props
    });
    if (props.disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    return (
        <button className={classes}>{children}</button>
    );
}

export default Button;