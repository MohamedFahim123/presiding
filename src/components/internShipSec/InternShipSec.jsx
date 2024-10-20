import styles from './internShipSec.module.css';
import sectionImg from '../../assets/home-overview/career_internShip.jpg';

export default function InternShipSec() {
    return (
        <div className={styles.internShipSec__handler}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center">
                        <h3>
                            Presiding Intern Ships
                        </h3>
                        <p>
                            Discover opportunities that go beyond your expectations.
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <img src={sectionImg} alt="intern ship Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};
