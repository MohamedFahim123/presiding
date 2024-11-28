import './myHomeOverview.css';
import logo from '../../assets/logos/Untitled-2-02.svg';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";

export default function MyHomeOverview() {
    const [currData] = useFetch(`${baseUrl}/sections`);
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
            <div className='myHomeOverview__handler'>
                <div className='container-fluid px-0'>
                    <div className="fullOverview_items">
                        <div className="overview_item" onClick={() => window.location.href = currData?.sections[0]?.link}>
                            <img loading='lazy' src={currData?.sections ? currData?.sections[0]?.image : ''} alt="background 1" />
                            <div className="overview_info">
                                <img loading='lazy' src={logo} alt="logo" />
                                <p>
                                    {currData?.sections ? currData?.sections[0]?.description : ''}
                                </p>
                            </div>
                        </div>
                        <div className='overview_item d-flex flex-column justify-content-between h-100'>
                            <div className="item_small" onClick={() => window.location.href = currData?.sections[1]?.link}>
                                <img loading='lazy' src={currData?.sections ? currData?.sections[1]?.image : ''} alt="background 2" />
                            </div>
                            <div className="item_small" onClick={() => window.location.href = currData?.sections[2]?.link}>
                                <div className="overflow"></div>
                                <img loading='lazy' src={currData?.sections ? currData?.sections[2]?.image : ''} alt="bg-1" />
                                <div className="overview_info hasIcon">
                                    <p>
                                        {currData?.sections ? currData?.sections[2]?.description : ''}
                                    </p>
                                    <i className="bi bi-arrow-bar-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className='overview_item d-flex flex-column justify-content-between h-100'>
                            <div className="item_small" onClick={() => window.location.href = currData?.sections[3]?.link}>
                                <div className="overflow bg_color"></div>
                                <img loading='lazy' src={currData?.sections ? currData?.sections[3]?.image : ''} alt="background 3" />
                                <div className="overview_info hasIcon">
                                    <p>
                                        {currData?.sections ? currData?.sections[3]?.description : ''}
                                    </p>
                                    <i className="bi bi-arrow-bar-right"></i>
                                </div>
                            </div>
                            <div className="item_small" onClick={() => window.location.href = currData?.sections[4]?.link}>
                                <img loading='lazy' src={currData?.sections ? currData?.sections[4]?.image : ''} alt="background 4" />
                                <div className="overview_info hasIcon">
                                    <p>
                                        {currData?.sections ? currData?.sections[4]?.description : ''}
                                    </p>
                                    <i className="bi bi-arrow-bar-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </motion.div>
    )
}
