import { Link } from 'react-router-dom';
import styles from './contactBottomSection.module.css';

export default function ContactBottmSection() {
    return (
        <div className={styles.sectionContainer}>
            <div className="container">
                <div className="row">
                    <div className={`${styles.headContent} col-12`}>
                        <h4>Contact Information</h4>
                        <p><i className="bi bi-envelope-fill"></i> <Link to="mailto:info@presiding.com">info@presiding.com</Link></p>
                    </div>
                    <div className={`${styles.bottomCard} col-md-4`}>
                        <h5>
                            UK Headquarters
                        </h5>
                        <p>
                            The Square Basing View
                            Basingstoke, RG21 4EB
                            United Kingdom
                        </p>
                    </div>
                    <div className={`${styles.bottomCard} col-md-4`}>
                        <h5>
                            Middle East Regional
                        </h5>
                        <p>
                            Office Presiding Solutions
                            (AlFursan Universal CPA)
                            Amman, Jordan View
                        </p>
                    </div>
                    <div className={`${styles.bottomCard} col-md-4`}>
                        <h5>
                            Saudi Arabia Office
                        </h5>
                        <p>
                            Presiding Solutions B1,2nd Floor
                            Al Mathar Ash Shamali
                            Riyadh 1233
                        </p>
                    </div>
                    <div className="col-12 text-center">
                        <h4 className={styles.bottomHead}>
                            KSA - UK - JORDAN - USA - IRAQ - TURKEY
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};