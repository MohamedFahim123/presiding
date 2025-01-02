import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { baseUrl } from "../../functions/baseUrl";
import { useFetch } from "../../hooks/useFetch";
import styles from "./myHomeIndustries.module.css";

export default function MyHomeIndustries() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true });
  const [currData] = useFetch(`${baseUrl}/industries`);
  const [chunkedData, setChunkedData] = useState([]);

  useEffect(() => {
    const chunkArray = Array.from({ length: Math.ceil(currData?.industries?.length / 4) }, (_, index) =>
      currData?.industries?.slice(index * 4, index * 4 + 4)
    );
    setChunkedData(chunkArray);
  }, [currData?.industries]);

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.8 }}
      style={{ margin: "0 auto" }}
    >
      <div className={styles.myHomeIndustries__handler}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-5 ${styles.myHomeIndustries__text}`}>
              <p className={`mb-3`}>
                <span className={styles.myHomeIndustries__textTopHead}>Industries</span>
              </p>
              <h3 className={`mb-4`}>
                Empowering Industries, Unlocking Potential
              </h3>
              <p className={styles.myHomeIndustries__textToptext}>
                This aligns with the tone and style of the provided content while showcasing a broader range of industries. Let me know if you{"'"}d like further adjustments!
              </p>
            </div>
            <Swiper
              className={`${styles.customSwiper} mySwiper cursorGrap col-lg-7 position-relative`}
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
              {chunkedData?.map((industryChunk, idx) => (
                <SwiperSlide key={idx} className="pt-4">
                  <div className="row">
                    {
                      industryChunk?.map((el) => (
                        <div
                          key={el?.id}
                          className={`col-6 d-flex flex-column align-items-center gap-3 ${styles.industrySlide__info}`}
                        >
                          <img src={el?.image} alt="icon" className="img-fluid" />
                          <h4>{el?.title}</h4>
                        </div>
                      ))
                    }
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.customPrevButton}><i className="bi bi-arrow-left"></i></div>
            <div className={styles.customNextButton}><i className="bi bi-arrow-right"></i></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
