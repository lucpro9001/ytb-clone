import Header from '../../components/headers/Header';
import Navbar from '../../components/navs/Navbar';

import style from './default.module.scss';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar pos={'fixed'}/>
            <div className={style.content}>
                {children}
            </div>
        </>
    );
}

export default DefaultLayout;