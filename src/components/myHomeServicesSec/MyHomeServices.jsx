import './myHomeServices.css';
import MyMainHeader from '../myMainHeaderSec/MyMainHeader';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { useState, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { motion, useInView } from "framer-motion";

export default function MyHomeServices() {
    const [currData] = useFetch(`${baseUrl}/home-services`);
    const [currChosedService, setCurrChosedService] = useState([]);
    const [show, setShow] = useState(false);
    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, { once: true });

    const handleClose = () => {
        setShow(false);
        setCurrChosedService([]);
    };
    const handleShow = () => setShow(true);

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8 }}
            style={{ margin: '0 auto' }}
        >
            <div className='myHomeServices__handler'>
                <div className="container">
                    <>
                        <MyMainHeader
                            secHead='OUR services'
                            secText='We create solutions that '
                            secText2='are bold & up with the times'
                        />
                    </>
                    <div className="servicesItem__handler">
                        <div className="row mt-5 mb-3">
                            {
                                currData?.services?.map((service) => (
                                    <div key={service?.id} className="col-lg-3 col-md-3 mb-5" onClick={() => {
                                        handleShow();
                                        setCurrChosedService(service);
                                    }}>
                                        <div className="serviceItem_box">
                                            <img className='rounded' src={service?.image} alt={`icon-${service?.id}`} />
                                            <div className="serviceItem_info">
                                                <h3 className='cursorPointer'>
                                                    {service?.title}
                                                </h3>
                                                <p>
                                                    {service?.description?.slice(0, 50)}...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="modalContainer">
                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{currChosedService?.title ? currChosedService?.title : ''}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ul>
                                        <li className='subService__item'><i className="bi bi-arrow-right-circle-fill"></i> sub serv1</li>
                                        <li className='subService__item'><i className="bi bi-arrow-right-circle-fill"></i> sub serv2</li>
                                        <li className='subService__item'><i className="bi bi-arrow-right-circle-fill"></i> sub serv3</li>
                                    </ul>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
