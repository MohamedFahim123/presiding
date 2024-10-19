import './myHomeInsights.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import { Navigation } from "swiper/modules";
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import { NavLink } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';

export default function MyHomeInsights() {
    const [currData] = useFetch(`${baseUrl}/home-blogs`);

    return (
        <div className='myHomeInsights__handler'>
            <div className="container-fluid">
                <div className="insightsSlider__handler">
                    <div className="row">
                        <div className="col-12">
                            <MyMainHeader
                                secHead='PUBLICATIONS'
                                secText='Market Insights'
                            />
                        </div>
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
                                    currData?.blogs?.map((blog) => (
                                        <SwiperSlide key={blog?.id} className="insightSlide__item">
                                            <div className="row">
                                                <div className="col-6 insighSlide__info">
                                                    <h2>
                                                        {blog?.description?.slice(0, 30)}...
                                                    </h2>
                                                    <p>
                                                        {blog?.created_at}
                                                    </p>
                                                    <NavLink className={'nav-link'} to={`insights/${blog?.id}`}>
                                                        <span>read more</span>
                                                        <i className="bi bi-arrow-bar-right"></i>
                                                    </NavLink>

                                                </div>
                                                <div className="insighSlide__image col-6">
                                                    <img src={blog?.image} alt="icon" />
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
