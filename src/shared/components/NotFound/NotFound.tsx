import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/path';
import notFoundImage from '../../../assets/images/not-found/not-found.png';
import { NextArrowIcon } from '@/assets/svg/svg';
import styles from './styles.module.scss';


const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.notFoundContainer}>
            <img src={notFoundImage} alt="Not Found" />
            <button onClick={() => navigate(ROUTE_PATHS.ROOT)}>Quay lại trang chủ <NextArrowIcon/></button>
        </div>
    );
}

export default NotFound;
