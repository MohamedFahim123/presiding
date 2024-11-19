import styles from './internShipSec.module.css';
import sectionImg from '../../assets/home-overview/career_internShip.jpg';
import { useNavigate } from 'react-router-dom';

export default function InternShipSec() {
    const navigate = useNavigate();

    return (
        <div className={styles.internShipSec__handler}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-9 d-flex flex-column justify-content-center">
                        <h3>
                            Presiding Internships
                        </h3>
                        <p>
                            Discover opportunities that go beyond your expectations.
                        </p>
                        <button onClick={()=>navigate('/careers/fill-application-form')} className={styles.applyBtn}>
                            Apply Now
                        </button>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <img src={sectionImg} alt="intern ship Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};
