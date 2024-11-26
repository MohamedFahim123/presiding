import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import './myHomeSlider.css';
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import { useFetch } from "../../hooks/useFetch";
import { baseUrl } from "../../functions/baseUrl";
import { Link } from "react-router-dom";

export default function MyHomeSlider({ heading, title, overLayColor, sliderImg1, btnVisibility ,backGroundPosition}) {
    const [currData] = useFetch(`${baseUrl}/sliders`);


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
                {
                    currData?.sliders?.map(slider => (
                        <SwiperSlide key={slider?.id} className={`slide__item__handler`}
                            style={{ backgroundImage: `url(${sliderImg1 ? sliderImg1 : slider.image})` , backgroundPosition: backGroundPosition ? backGroundPosition : 'center', }}>
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
                                                    {slider?.title ? slider?.title : title}
                                                </p>
                                                <h2>
                                                    {slider?.description ? slider?.description : heading}
                                                </h2>
                                                {
                                                    btnVisibility &&
                                                    <Link to={slider?.link ? slider?.link : ''}>
                                                        {slider?.button_text ? slider?.button_text : ''}
                                                    </Link>
                                                }
                                            </>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
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
    btnVisibility: PropTypes.bool,
    sliderImg1: PropTypes.string,
    backGroundPosition: PropTypes.string,
};