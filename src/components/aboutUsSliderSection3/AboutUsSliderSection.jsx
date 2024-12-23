import styles from './aboutUsSliderSection.module.css';

export default function AboutUsSliderSection3() {
    return (
        <div className={styles.aboutUsSliderSec__handler}>
            <div className="container">
                <div className={styles.slide}>
                    <h6>Our Mission</h6>
                    <h2>Empowering Success Through Insightful Solutions</h2>
                    <p>At our consulting firm, we are dedicated to delivering insightful and innovative solutions tailored to each client’s unique needs. Our unwavering commitment is to drive our clients’ success, treating their objectives as our own.</p>
                </div>
                <hr />
                <div className={styles.slide}>
                    <h6>Our Vission</h6>
                    <h2>Empowering Success Through Insightful Solutions</h2>
                    <p>At our consulting firm, we are dedicated to delivering insightful and innovative solutions tailored to each client’s unique needs. Our unwavering commitment is to drive our clients’ success, treating their objectives as our own.</p>
                </div>
            </div>
        </div>
    );
}
