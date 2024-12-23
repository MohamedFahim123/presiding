import styles from './aboutUsSliderSection.module.css';
import img1 from '../../assets/aboutUs/img5.png';
import img2 from '../../assets/aboutUs/img6.png';

export default function AboutUsSliderSection2() {
    return (
        <div className={styles.aboutUsSliderSec__handler}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-5 position-relative ${styles.imgsContainer}`}>
                        <img className={styles.firstImg} src={img1} alt="first about image" />
                        <img className={styles.secondImg} src={img2} alt="second about image" />
                    </div>
                    <div className="col-lg-7">
                        <div className={styles.slide}>
                            <h6>Our Mission</h6>
                            <h2>Empowering Success Through Insightful Solutions</h2>
                            <p>At our consulting firm, we are dedicated to delivering insightful and innovative solutions tailored to each client’s unique needs. Our unwavering commitment is to drive our clients’ success, treating their objectives as our own.</p>
                        </div>
                        <div className={styles.slide}>
                            <h6>Our Vission</h6>
                            <h2>Empowering Success Through Insightful Solutions</h2>
                            <p>At our consulting firm, we are dedicated to delivering insightful and innovative solutions tailored to each client’s unique needs. Our unwavering commitment is to drive our clients’ success, treating their objectives as our own.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
