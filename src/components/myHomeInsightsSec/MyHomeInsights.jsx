import './myHomeInsights.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import { Navigation } from "swiper/modules";
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import mainImg from '../../assets/home-insights/WhatsApp Image 2024-10-27 at 17.53.26_a6394369.jpg';

export default function MyHomeInsights() {
    const [currData] = useFetch(`${baseUrl}/home-blogs`);
    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, { once: true });

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8 }}
            style={{ margin: '0 auto' }}
        >
            <div className='myHomeInsights__handler'>
                <div className="container-fluid">
                    <div className="insightsSlider__handler">
                        <div className="row">
                            <div className="col-12 headingColumn">
                                <MyMainHeader
                                    secHead='PUBLICATIONS'
                                    secText='Business Insights'
                                />
                            </div>
                            <div className="col-12">
                                <div className="custom-navigation">
                                    <div className="swiper-button-prev-custom"><i className="bi bi-arrow-bar-left"></i></div>
                                    <div className="swiper-button-next-custom"><i className="bi bi-arrow-bar-right"></i></div>
                                </div>
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
                                                    {/* <div className="col-6 insighSlide__info">
                                                        <h2 title={blog?.title}>
                                                            {blog?.title?.length > 30 ? blog?.title?.slice(0, 30) + '...' : blog?.title}
                                                        </h2>



                                                    </div> */}
                                                    <div className="insighSlide__image col-12">
                                                        <img src={mainImg} alt="icon" />
                                                        {/* <NavLink className={'nav-link'} to={`insights/${blog?.id}`}>
                                                            <span>read more</span>
                                                            <i className="bi bi-arrow-bar-right"></i>
                                                        </NavLink> */}
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
        </motion.div>
    )
}
