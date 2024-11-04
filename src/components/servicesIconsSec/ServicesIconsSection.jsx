import styles from './servicesIcons.module.css';

export default function ServicesIconsSection() {
    return (
        <div className={styles.servicesIcons__handler}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className={`col-md-3 d-flex px-2 ${styles.gridContainerItem}`}>
                        <h3 className={styles.iconContainer}>
                            20
                        </h3>
                        <div className={styles.textContainer}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Corporis.</p>
                        </div>
                    </div>
                    <div className={`col-md-3 d-flex px-2 ${styles.gridContainerItem}`}>
                        <h3 className={styles.iconContainer}>
                            32
                        </h3>
                        <div className={styles.textContainer}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Corporis.</p>
                        </div>
                    </div>
                    <div className={`col-md-3 d-flex px-2 ${styles.gridContainerItem}`}>
                        <h3 className={styles.iconContainer}>
                            10
                        </h3>
                        <div className={styles.textContainer}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Corporis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
