import './myHomeIndustries.css';
import IndustriesSlider from '../industriesSliderSec/IndustriesSlider';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";

export default function MyHomeIndustries() {
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
      <div className='myIndustriesHome_handler'>
        <div className="container-fluid ms-0 me-0 ps-0 pe-0">
          <div className="myIndustriesHome__bg">
            <div className="row me-0">
              <div className="col-6 ms-0 me-0 pe-0">
                <div className="start__bg"
                >
                  <h3 className='mt-4 position-relative z-3'>
                    Industries that
                    <br />
                    we have catered to
                  </h3>
                </div>
              </div>
              <div className="col-6 ms-0 ps-0 pe-0">
                <div className="end__bg"
                >
                  <div className="container"></div>
                </div>
              </div>
            </div>
            <div className='industries__arrow'>
              <i className="bi bi-arrow-bar-right cursorPointer"></i>
            </div>
          </div>
          <IndustriesSlider />
        </div>
      </div>
    </motion.div>
  )
}
