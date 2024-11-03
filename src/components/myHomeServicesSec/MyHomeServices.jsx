import './myHomeServices.css';
import MyMainHeader from '../myMainHeaderSec/MyMainHeader';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

export default function MyHomeServices() {
    const [currData] = useFetch(`${baseUrl}/home-services`);
    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, { once: true });
    const [isVisible, setIsVisible] = useState([false, false, false, false]);

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8 }}
            style={{ margin: '0 auto' }}
        >
            <div className='myHomeServices__handler'>
                <div className="servicesItem__handler ">
                    <>
                        <MyMainHeader
                            secHead='OUR services'
                            secText='We create solutions that '
                            secText2='are bold & up with the times'
                        />
                    </>
                </div>
                <div className="container">
                    <div className="row mt-5 mb-3">
                        {
                            currData?.services?.map((service, idx) => (
                                <div key={service?.id} className="col-lg-3 col-md-3 mb-5 position-relative overflow-hidden">
                                    <div className="serviceItem_box position-relative" onClick={() => {
                                        setIsVisible(isVisible.map((el, index) => idx === index ? true : false))
                                    }}>
                                        <img className='rounded' src={service?.image} alt={`icon-${service?.id}`} />
                                        <div className="serviceItem_info">
                                            <h3 className='cursorPointer'>
                                                {service?.title}
                                            </h3>
                                        </div>
                                        <div className={`hidden__content ${isVisible[idx] && 'visible__content'}`}>
                                            <span className='position-absolute'><i className="bi bi-x-circle cursorPointer" onClick={() => setIsVisible([false, false, false, false])}></i></span>
                                            <h5>Sub Services</h5>
                                            <ul>
                                                <li className='subService__item'><i className="bi bi-arrow-right-circle-fill"></i> sub serv1</li>
                                                <li className='subService__item'><i className="bi bi-arrow-right-circle-fill"></i> sub serv2</li>
                                                <li className='subService__item'><i className="bi bi-arrow-right-circle-fill"></i> sub serv3</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
