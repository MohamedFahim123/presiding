import './myHomeServices.css';
import MyMainHeader from '../myMainHeaderSec/MyMainHeader';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function MyHomeServices() {
    const [currData] = useFetch(`${baseUrl}/home-services`);
    const [currChosedService,setCurrChosedService] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setCurrChosedService([]);
    };
    const handleShow = () => setShow(true);

    return (
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
                                <div key={service?.id} className="col-lg-3 col-md-3 mb-5">
                                    <div className="serviceItem_box">
                                        <img className='rounded' src={service?.image} alt={`icon-${service?.id}`} />
                                        <div className="serviceItem_info">
                                            <h3 className='cursorPointer w-75' onClick={() => {
                                                handleShow();
                                                setCurrChosedService(service);
                                            }}>
                                                {service?.title}
                                            </h3>
                                            <p>
                                                {service?.description}
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
    )
}
