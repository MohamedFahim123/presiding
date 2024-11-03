import './myHomeInsights.css'
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { NavLink } from 'react-router-dom';
import img from "../../assets/home-insights/WhatsApp Image 2024-10-27 at 17.53.26_a6394369.jpg";

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
                <div className="insightsSlider__handler">
                    <div className="container">
                        <div className="row flex-wrap justify-content-center">
                            <div className="col-12 headingColumn">
                                <MyMainHeader
                                    secHead='PUBLICATIONS'
                                    secText='Business Insights'
                                />
                            </div>
                            {
                                currData?.blogs?.map((blog) => (
                                    <div key={blog?.id} className="col-md-4 mt-4">
                                        <div className="insightSlide__item position-relative">
                                            <img src={img} alt="blog cover" />
                                            <div className="insightSlide__link">
                                                <NavLink className={'nav-link'} to={`insights/${blog?.id}`}>
                                                    <span>read more </span>
                                                    <i className="bi bi-arrow-bar-right"></i>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
