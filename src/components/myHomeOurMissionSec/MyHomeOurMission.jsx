import './myHomeOurMission.css';
import MyMainHeader from '../myMainHeaderSec/MyMainHeader';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyHomeOurMission({ currPage }) {
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
            <div className={`ourMission__handler ${currPage === 'about' && 'pb-5 mb-4'}`}>
                <div className="container">
                    <div className="mission_header">
                        <MyMainHeader
                            secHead='About Presiding'
                            secText='HELPING ENTITIES STAND OUT'
                        />
                    </div>
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="missionInfo__handler">
                                <div className="missionInfo_text">
                                    <p className='mb-3'>
                                        Presiding Solutions stands as a trusted partner for clients seeking to elevate their business performance and achieve transformative results. Our unwavering commitment to quality, professionalism, and client-focused service has established us as a leader in the consultancy industry.
                                    </p>
                                    <p className='mb-4'>
                                        By combining deep expertise across Finance, Management, CSR, Oil & Gas, and Training Services, we deliver tailored solutions that meet the highest standards. At Presiding, we don’t just offer services; we provide leadership that drives real value and lasting impact for our clients.
                                    </p>
                                    {
                                        currPage === 'home' &&
                                        <p className='d-flex justify-content-end'>
                                            <Link to={'/about-us'} className='underLined'>
                                                More About Us
                                            </Link>
                                            <i className="bi bi-arrow-bar-right cursorPointer ms-1"></i>
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
MyHomeOurMission.propTypes = {
    currPage: PropTypes.string.isRequired,
}