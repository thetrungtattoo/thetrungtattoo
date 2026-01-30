import { useState, useEffect } from 'react';
import { ROUTE_PATHS } from '@/config/path';

import styles from './styles.module.scss';

const CopyRight = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <div className={styles.copyrightContainer}>
            <span className={styles.copyrightContent}>
                <span className={styles.copyright}>Copyright © 2025 The Thế Trung Tattoo.</span>
                <span className={styles.copyrightVersion}> All rights reserved for Version 26.1.2</span>
            </span>
            <span className={styles.copyrightText}>{isMobile ? 'Powered by ' : 'Website được cung cấp và quản lý bởi '}<a className={styles.hiubdn} href={ROUTE_PATHS.BRAND.HIUBDN}>_hiubdn.</a></span>
        </div>
    );
}

export default CopyRight;
