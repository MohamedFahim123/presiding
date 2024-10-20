import styles from './servicesIcons.module.css';

export default function ServicesIconsSection() {
    return (
        <div className={styles.servicesIcons__handler}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3 d-flex px-2">
                        <div className={styles.iconContainer}>
                            <i className="bi bi-briefcase"></i>
                        </div>
                        <div className={styles.textContainer}>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-3 justify-content-center d-flex px-2">
                        <div className={styles.iconContainer}>
                            <i className="bi bi-briefcase"></i>
                        </div>
                        <div className={styles.textContainer}>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-3 justify-content-center d-flex px-2">
                        <div className={styles.iconContainer}>
                            <i className="bi bi-briefcase"></i>
                        </div>
                        <div className={styles.textContainer}>
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
