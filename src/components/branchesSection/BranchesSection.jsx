import styles from './branchesSection.module.css';
import jorImg from '../../assets/pranches/jordanFlag.png';
import UAEImg from '../../assets/pranches/FlagOftheUnitedArabEmirates.webp';
import UKImg from '../../assets/pranches/UkFlag.png';
import USAImg from '../../assets/pranches/usaFlag.png';
import { Link } from 'react-router-dom';

export default function BranchesSection() {
    return (
        <div className={`${styles.branches__handler}`}>
            <div className="container">
                <div className="row px-lg-5">
                    <div className="col-md-6 mb-5">
                        <div className={`${styles.branch__card}`}>
                            <h4 className='d-flex align-items-center'>
                                <img className={styles.flagImg} src={jorImg} alt="Jordan Flag" />
                                <span>Amman</span>
                            </h4>
                            <p>Presiding Solutions: (AlFursan Universal CPA) <br />Amman, Jordan.</p>
                            <p>Email: <Link to={'mailto:info@presiding.com'} className={styles.email_link}>info@presiding.com</Link></p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className={`${styles.branch__card}`}>
                            <h4 className='d-flex align-items-center'>
                                <img className={styles.flagImg} src={UAEImg} alt="Jordan Flag" />
                                <span>UAE</span>
                            </h4>
                            <p>Presiding Solutions: (AlFursan Universal CPA) <br />Amman, Jordan.</p>
                            <p>Email: <Link to={'mailto:info@presiding.com'} className={styles.email_link}>info@presiding.com</Link></p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-lg-0 mb-5">
                        <div className={`${styles.branch__card}`}>
                            <h4 className='d-flex align-items-center'>
                                <img className={styles.flagImg} src={UKImg} alt="Jordan Flag" />
                                <span>UK</span>
                            </h4>
                            <p>Presiding Solutions: (AlFursan Universal CPA) <br />Amman, Jordan.</p>
                            <p>Email: <Link to={'mailto:info@presiding.com'} className={styles.email_link}>info@presiding.com</Link></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${styles.branch__card}`}>
                            <h4 className='d-flex align-items-center'>
                                <img className={styles.flagImg} src={USAImg} alt="Jordan Flag" />
                                <span>USA</span>
                            </h4>
                            <p>Presiding Solutions: (AlFursan Universal CPA) <br />Amman, Jordan.</p>
                            <p>Email: <Link to={'mailto:info@presiding.com'} className={styles.email_link}>info@presiding.com</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};