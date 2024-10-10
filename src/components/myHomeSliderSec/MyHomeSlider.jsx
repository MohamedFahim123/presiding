import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import './myHomeSlider.css';

import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
export default function MyHomeSlider({ heading, title, overLayColor, showBtn, sliderImg1, sliderImg2 }) {
    return (
        <div className="slider__handler">
            <Swiper
                className='mySwiper'
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
            >
                <SwiperSlide className={`slide__item__handler`}
                    style={{ backgroundImage: `url(${sliderImg1})` }}>
                    {
                        overLayColor &&
                        <div className="overLay position-absolute" style={{ top: 0, left: 0, zIndex: -1, width: '100%', height: '100%', backgroundColor: overLayColor }}></div>
                    }
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="slideItem__info">
                                    <>
                                        <p>
                                            {title ? title : ''}
                                        </p>
                                        <h2>
                                            {heading ? heading : 'We grow your business'}
                                        </h2>
                                        {
                                            showBtn &&
                                            <button>
                                                View More
                                            </button>
                                        }
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="slide__item__handler"
                    style={{ backgroundImage: `url(${sliderImg2})` }}
                >
                    {
                        overLayColor &&
                        <div className="overLay position-absolute" style={{ top: 0, left: 0, zIndex: -1, width: '100%', height: '100%', backgroundColor: overLayColor }}></div>
                    }
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="slideItem__info">
                                    <>
                                        <p>
                                            {title ? title : ''}
                                        </p>
                                        <h2>
                                            {heading ? heading : 'We grow your business'}
                                        </h2>
                                        {
                                            showBtn &&
                                            <button>
                                                View More
                                            </button>
                                        }
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="custom-navigation">
                <div className="swiper-button-prev-custom"><i className="bi bi-arrow-bar-left"></i></div>
                <div className="swiper-button-next-custom"><i className="bi bi-arrow-bar-right"></i></div>
            </div>
        </div>
    )
}
MyHomeSlider.propTypes = {
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overLayColor: PropTypes.string,
    showBtn: PropTypes.bool,
    sliderImg1: PropTypes.string.isRequired,
    sliderImg2: PropTypes.string.isRequired,
};