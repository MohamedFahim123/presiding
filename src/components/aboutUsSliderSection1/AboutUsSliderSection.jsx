import styles from './aboutUsSliderSection.module.css';
import img1 from '../../assets/aboutUs/img5.png';
import img2 from '../../assets/aboutUs/img6.png';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function AboutUsSliderSection1() {
    return (
        <div className={styles.aboutUsSliderSec__handler}>
            <div className="container">
                <div className="row">
                    <div className={`col-lg-5 position-relative ${styles.imgsContainer}`}>
                        <img className={styles.firstImg} src={img1} alt="first about image" />
                        <img className={styles.secondImg} src={img2} alt="second about image" />
                    </div>

                    <Swiper
                        className={`${styles.customSwiper} mySwiper cursorGrap col-lg-7 ps-4 h-100 position-relative`}
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: `.${styles.customPrevButton}`,
                            nextEl: `.${styles.customNextButton}`,
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            995: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide className={styles.slide}>
                            <h6>Our Mission</h6>
                            <h2>Empowering Success Through Insightful Solutions</h2>
                            <p>At our consulting firm, we are dedicated to delivering insightful and innovative solutions tailored to each client’s unique needs. Our unwavering commitment is to drive our clients’ success, treating their objectives as our own.</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <h6>Our Mission</h6>
                            <h2>Empowering Success Through Insightful Solutions</h2>
                            <p>At our consulting firm, we are dedicated to delivering insightful and innovative solutions tailored to each client’s unique needs. Our unwavering commitment is to drive our clients’ success, treating their objectives as our own.</p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <h6>Our Mission</h6>
                            <h2>Empowering Success Through Insightful Solutions</h2>
                            <p>At our consulting firm, we are dedicated to delivering insightful and innovative solutions tailored to each client’s unique needs. Our unwavering commitment is to drive our clients’ success, treating their objectives as our own.</p>
                        </SwiperSlide>
                    </Swiper>
                    <div className={styles.customPrevButton}><i className="bi bi-arrow-left"></i></div>
                    <div className={styles.customNextButton}><i className="bi bi-arrow-right"></i></div>
                </div>
            </div>
        </div>
    );
}
