import './myHomeOurMission.css';
import MyMainHeader from '../myMainHeaderSec/MyMainHeader';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";

export default function MyHomeOurMission() {
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
            <div className='ourMission__handler'>
                <div className="container">
                    <div className="mission_header">
                        <MyMainHeader
                            secHead='OUR MISSION'
                            secText='HELPING ENTITIES STAND OUT'
                        />
                    </div>
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="missionInfo__handler">
                                <div className="missionInfo_text">
                                    <p className='mb-3'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus vehicula, maximus lorem malesuada, condimentum felis. Praesent posuere quam a rutrum dignissim.
                                    </p>
                                    <p>
                                        Pellentesque dolor sapien, lobortis vel pulvinar rhoncus, auctor consectetur dolor. Aliquam eget velit vel massa ornare tincidunt. Nunc sagittis in urna quis sagittis. Morbi dignissim eleifend orci a iaculis. Proin nunc justo, dictum vitae ante ut, accumsan tristique tellus. In lectus velit, dictum ut pretium non, placerat nec ante.
                                        Duis congue mauris ac nibh congue tristique. Aenean eget felis faucibus neque placerat volutpat. Ut nec risus consectetur, elementum enim a, malesuada sapien. Praesent scelerisque ligula ac orci ultrices semper. Nunc fringilla nulla ut tellus pharetra facilisis nec rhoncus ipsum. Nam lacus augue, suscipit eget dui eu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
