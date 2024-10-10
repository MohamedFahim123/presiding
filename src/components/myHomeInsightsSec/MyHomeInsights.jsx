import './myHomeInsights.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import { Navigation } from "swiper/modules";
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import pic1 from '../../assets/home-insights/Picture1.png'
import pic2 from '../../assets/home-insights/Picture2.png'
import { NavLink } from 'react-router-dom';
export default function MyHomeInsights() {
    const insightsSliderItems = [
        {
            title: 'How Often You Should Publish Blog, Video, and Social Media Content',
            date: '23. OCT',
            image: pic1
        },
        {
            title: 'How Often You Should Publish Blog, Video, and Social Media Content',
            date: '23. OCT',
            image: pic2
        },
        {
            title: 'How Often You Should Publish Blog, Video, and Social Media Content',
            date: '23. OCT',
            image: pic1
        },
        {
            title: 'How Often You Should Publish Blog, Video, and Social Media Content',
            date: '23. OCT',
            image: pic2
        },
    ]
    return (
        <div className='myHomeInsights__handler'>
            <div className="container">
                <MyMainHeader
                    secHead='PUBLICATIONS'
                    secText='Market Insights'
                />
            </div>
            <div className="container-fluid">
                <div className="insightsSlider__handler">
                    <div className="row">
                        <div className="col-12">
                        <div className="custom-navigation">
                                <div className="swiper-button-prev-custom"><i className="bi bi-arrow-bar-left"></i></div>
                                <div className="swiper-button-next-custom"><i className="bi bi-arrow-bar-right"></i></div>
                            </div>
                            <Swiper
                                className='mySwiper '
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
                                breakpoints={{
                                    300: {
                                        slidesPerView: 1.1,
                                        spaceBetween: 10
                                    },
                                    426: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 20
                                    },
                                    600: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 15
                                    },
                                    768: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 15
                                    },
                                    995: {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                    },
                                }}
                            >
                                {
                                    insightsSliderItems?.map((el, index) => (
                                        <SwiperSlide key={index} className="insightSlide__item">
                                            <div className="row">
                                                <div className="col-6 insighSlide__info">
                                                    <h2>
                                                        {el?.title}
                                                    </h2>
                                                    <p>
                                                        {el?.date}
                                                    </p>
                                                    <NavLink className={'nav-link'}>
                                                        <span>read more</span>
                                                        <i className="bi bi-arrow-bar-right"></i>
                                                    </NavLink>

                                                </div>
                                                <div className="insighSlide__image col-6">
                                                    <img src={el?.image} alt="icon" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
