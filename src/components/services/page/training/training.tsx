import { Link } from 'react-router-dom';
import WaitingImage from '@/assets/images/waiting/waiting.png';
import { AngleRight } from '@/assets/svg/svg';
import { ROUTE_PATHS } from '@/config/path';

import styles from './styles.module.scss';

const TrainingWorkshop = () => {
    return (
        <div className={styles.trainingContainer}>
            <img className={styles.waitingImage} src={WaitingImage} alt="" />
            <span className={styles.waitingTitle}>Dịch vụ hiện tại đang trong quá trình hoàn thiện và sẽ chính thức ra mắt trong thời gian tới. Vui lòng quay lại sau.</span>
            <Link to={ROUTE_PATHS.ROOT} className={styles.waitingLink}>Về lại trang chủ <AngleRight/></Link>
        </div>
    );
}

export default TrainingWorkshop;
