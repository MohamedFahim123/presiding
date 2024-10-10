import './myHomeIndustries.css'
import startBg from '../../assets/home-industries/start.png'
import endBg from '../../assets/home-industries/end.png'
import icon1 from '../../assets/home-industries/icon1.png'
import icon2 from '../../assets/home-industries/icon2.png'
import icon3 from '../../assets/home-industries/icon3.png'
import logo1 from '../../assets/home-industries/logo1.png'
import logo2 from '../../assets/home-industries/Logo2.png'
import logo3 from '../../assets/home-industries/logo3.png'
import logo4 from '../../assets/home-industries/logo4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
export default function MyHomeIndustries() {
  const industriesSliderItems = [
    {
      icon: icon1,
      title: 'Resources',
    },
    {
      icon: icon2,
      title: 'Technology',
    },
    {
      icon: icon3,
      title: 'Retail',
    },
    {
      icon: icon1,
      title: 'Resources',
    },
    {
      icon: icon2,
      title: 'Technology',
    },
    {
      icon: icon3,
      title: 'Retail',
    }
  ]
  const partenerSlideItems = [
    {
      img: logo1,
    },
    {
      img: logo2,
    },
    {
      img: logo3,
    },
    {
      img: logo4,
    },
    {
      img: logo1,
    },
    {
      img: logo2,
    },
    {
      img: logo3,
    },
  ]
  return (
    <div className='myIndustriesHome_handler'>
      <div className="container-fluid ms-0 me-0 ps-0 pe-0">
        <div className="myIndustriesHome__bg">
          <div className="row me-0">
            <div className="col-6 ms-0 me-0 pe-0">
              <div className="start__bg"
                style={{ backgroundImage: `url(${startBg})`}}
              >
                  <h3>
                    Industries that we have catered to
                  </h3>
                  <div>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                
              </div>
            </div>
            <div className="col-6 ms-0 ps-0 pe-0">
              <div className="end__bg"
                style={{ backgroundImage: `url(${endBg})` }}
              >
                <div className="container"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="myIndustries__slider">
          <div className="row justify-content-center">
            <div className="col-10">
              <Swiper
                className='mySwiper '
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false
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
                    spaceBetween: 20
                  },
                }}
              >
                {
                  industriesSliderItems?.map((el, index) => (
                    <SwiperSlide key={index} className="industrySlide__item">
                      <>
                        <div className="industrySlide__info">
                          <>
                            <img src={el?.icon} alt="icon" />
                            <h2>
                              {el?.title}
                            </h2>
                            <i className="bi bi-plus-circle fs-4"></i>
                          </>
                        </div>
                      </>
                    </SwiperSlide>
                  ))
                }

              </Swiper>
            </div>
          </div>

        </div>
        <div className="myPartener__slider__handler">
          <div className="row myPartener__slider">
            <div className="col-12">
              <Swiper
                className='mySwiper'
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false
                }}
                breakpoints={{
                  300: {
                    slidesPerView: 1.1,
                    spaceBetween: 10
                  },
                  426: {
                    slidesPerView: 1.8,
                    spaceBetween: 20
                  },
                  600: {
                    slidesPerView: 2.2,
                    spaceBetween: 15
                  },
                  768: {
                    slidesPerView: 3.1,
                    spaceBetween: 15
                  },
                  995: {
                    slidesPerView: 4.1,
                    spaceBetween: 20
                  },
                }}
              >
                {
                  partenerSlideItems?.map((el, index) => (
                    <SwiperSlide key={index} className="partenerSlide__item">
                      <img src={el?.img} alt="logo" />
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
