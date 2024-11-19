import styles from './servicesIcons.module.css';

export default function ServicesIconsSection() {
    return (
        <div className={styles.servicesIcons__handler}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className={`col-md-2 d-flex px-2 ${styles.gridContainerItem}`}>
                        <h3 className={styles.iconContainer}>
                            <i className='bi-clock-history'></i>
                        </h3>
                        <div className={styles.textContainer}>
                            <p>30+ years of experience</p>
                        </div>
                    </div>
                    <div className={`col-md-2 d-flex px-2 ${styles.gridContainerItem}`}>
                        <h3 className={styles.iconContainer}>
                            <i className='bi-kanban'></i>
                        </h3>
                        <div className={styles.textContainer}>
                            <p>150+ projects</p>
                        </div>
                    </div>
                    <div className={`col-md-2 d-flex px-2 ${styles.gridContainerItem}`}>
                        <h3 className={styles.iconContainer}>
                            <i className='bi-people'></i>
                        </h3>
                        <div className={styles.textContainer}>
                            <p>75+ clients</p>
                        </div>
                    </div>
                    <div className={`col-md-2 d-flex px-2 ${styles.gridContainerItem}`}>
                        <h3 className={styles.iconContainer}>
                            <i className='bi-globe'></i>
                        </h3>
                        <div className={styles.textContainer}>
                            <p>5 Branches Globally</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
