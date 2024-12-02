import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useFetch } from "../../hooks/useFetch";
import { baseUrl } from "../../functions/baseUrl";

export default function IndustriesSlider() {
    const [currData] = useFetch(`${baseUrl}/industries`);

    return (
        <div className="myIndustries__slider">
            <div className="row justify-content-center">
                <div className="col-10">
                    <Swiper
                        className='mySwiper cursorGrap'
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 2.1,
                                spaceBetween: 10
                            },
                            426: {
                                slidesPerView: 2.1,
                                spaceBetween: 20
                            },
                            600: {
                                slidesPerView: 2.2,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            },
                            995: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                        }}
                    >
                        {
                            currData?.industries?.map((industry) => (
                                <SwiperSlide key={industry?.id} className="industrySlide__item">
                                    <div className="industrySlide__info position-relative mt-5">
                                        <img src={industry?.image} alt="icon" />
                                        <h2>
                                            {industry?.title}
                                        </h2>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
