import classNames from 'classnames/bind';

import images from '../../assets/images';
import Button from '../buttons/Button';
import Input from '../inputs/Input';
import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search(props) {
    return (
        <div className={cx('wrapper')}>
            <Input placehoder='Tìm kiếm'/>
            <Button grey medium><img src={images.search} alt='search'/></Button>
            <div className={cx('cursor-pointer', cx('mic'))}><img src={images.mic} alt='mic'/></div>
        </div>
    );
}

export default Search;