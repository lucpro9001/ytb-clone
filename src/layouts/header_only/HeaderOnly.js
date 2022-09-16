import Header from '../../components/headers/Header';
import Navbar from '../../components/navs/Navbar';

import style from './header_only.module.scss';
function HeaderOnlyLayout({ children }) {
    return (
        <>
            <Header />
            <Navbar hidden/>
            <div className={style.content}>
                {children}
            </div>
        </>
    );
}

export default HeaderOnlyLayout;