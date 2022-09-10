import styles from './Navbar.module.scss';

function Navbar(props) {
    let main = [styles.wrapper];
    if(props.pos === 'fixed') {
        main.push(styles.fixed);
    } else {
        main.push(styles.hidden);
    }
    return (
        <div className={main.join(' ')}>
            <h1>Navbar</h1>
        </div>
    );
}

export default Navbar;
