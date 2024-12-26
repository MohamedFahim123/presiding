import styles from './aboutUsSliderSection.module.css';
import img1 from '../../assets/aboutUs/img5.png';
import img2 from '../../assets/aboutUs/img6.png';

export default function AboutUsSliderSection() {
    return (
        <div className={styles.aboutUsSliderSec__handler}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-5 position-relative ${styles.imgsContainer}`}>
                        <img className={styles.firstImg} src={img1} alt="first about image" />
                        <img className={styles.secondImg} src={img2} alt="second about image" />
                    </div>
                    <div className="col-lg-7 ps-5">
                        <div className={styles.slide}>
                            <h4>Our Mission</h4>
                            <h2>Turning Insight into Action</h2>
                            <p>Our mission is to redefine management consulting by being the catalyst that transforms insights into actions. We stand apart by embedding ourselves into our clients’ realities, crafting executable strategies that address their unique challenges, and ensuring every engagement leads to measurable and sustainable success. Our commitment is not to deliver ideas but to realize results.</p>
                        </div>
                        <div className={styles.slide}>
                            <h4>Our Vision</h4>
                            <h2>Empowering Transformation</h2>
                            <p>To be the leading partner in driving transformative business success, empowering organizations to thrive in dynamic markets with innovative strategies and sustainable solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
