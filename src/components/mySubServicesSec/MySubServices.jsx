import styles from './mySubServices.module.css'
import subServImg from '../../assets/subServ/subServImage.png'
export default function MySubServices() {
    return (
        <div className={`${styles.subServices__handler}`}>
            <div className="container">
                <div className={`${styles.subServices__info}`}>
                    <h5>
                        How Businesses Can Thrive in a Transforming Economy
                    </h5>
                    <p>
                        Saudi Arabia is experiencing a period of rapid transformation, driven by the ambitious Vision 2030 initiative. This comprehensive strategy aims to diversify the Kingdom’s economy, reduce its reliance on oil, and position it as a global leader in sectors like technology, tourism, healthcare, and renewable energy. For businesses, both local and international, this shift presents unparalleled opportunities to unlock new levels of growth and success.
                    </p>
                    <p>
                        In this article, we’ll explore how businesses in Saudi Arabia can unlock their full potential by leveraging strategic initiatives, embracing innovation, and aligning with the broader goals of Vision 2030.
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={`${styles.subServices__image}`}>
                                <img src={subServImg} alt="subServ-image" />
                            </div>
                        </div>
                    </div>
                    <p>
                    In this article, we’ll explore how businesses in Saudi Arabia can unlock their full potential by leveraging strategic initiatives, embracing innovation, and aligning with the broader goals of Vision 2030.
                    </p>
                </div>
            </div>
        </div>
    );
};