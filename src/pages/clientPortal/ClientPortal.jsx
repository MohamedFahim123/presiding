import { useEffect, useState } from 'react';
import styles from './clientPortal.module.css';
import MyLoader from '../../components/myLoaderSec/MyLoader';

export default function ClientPortal() {
    const [loading ,setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if(loading) {
        return <MyLoader />
    }

    return (
        <div className={styles.clientPortalHandler}>
            <h2>Our New Client Portal</h2>
            <p>Enhancing Your Engagement and Access. Launching Soon.</p>
        </div>
    );
};
