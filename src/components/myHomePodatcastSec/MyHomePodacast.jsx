import './myHomePodacast.css';
import videoCover from '../../assets/home-podacast/brooke-cagle-JBwcenOuRCg-unsplash.png';
import videoInfo from '../../assets/home-podacast/Mask group (5).png';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function MyHomePodacast() {
    const [currData] = useFetch(`${baseUrl}/video-cover`);
    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, { once: true });
    const navigate = useNavigate();

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8 }}
            style={{ margin: '0 auto' }}
        >
            <div className='myHomePodacast__handler'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 p-0 m-0">
                            <div className="podacastVideo__handler">
                                <img src={currData?.video_cover?.image ? currData?.video_cover?.image : videoCover} style={{ objectFit: 'cover' }} alt="video-cover" />
                                <div className="videoIcon_container cursorPointer" onClick={() => window.location.href = currData?.video_cover?.link}>
                                    <div className="viedo_icon">
                                        <i className="bi bi-play-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 p-0 m-0">
                            <div className="podacastInfo">
                                <img src={videoInfo} alt="video-cover" />
                                <div className="overflow"></div>
                                <ul className="podacast__icons ps-4 fw-semibold">
                                    <li>
                                        <i className='bi-clock-history'></i>
                                        <span>
                                            30+ years of experience
                                        </span>
                                    </li>
                                    <li>
                                        <i className='bi-kanban'></i>
                                        <span>
                                            150+ projects
                                        </span>
                                    </li>
                                    <li>
                                        <i className='bi-people'></i>
                                        <span>
                                            75+ clients
                                        </span>
                                    </li>
                                    <li>
                                        <i className='bi-globe'></i>
                                        <span>
                                            5 Branches Globally
                                        </span>
                                    </li>
                                </ul>
                                <div className="podaInfo_text cursorPointer" onClick={() => navigate('/contact-us')}>
                                    <h3>
                                        Get In Touch <i className="bi bi-arrow-bar-right"></i>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
