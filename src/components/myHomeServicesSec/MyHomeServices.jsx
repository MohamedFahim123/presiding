import './myHomeServices.css';
import MyMainHeader from '../myMainHeaderSec/MyMainHeader';
import { useFetch } from '../../hooks/useFetch';
import { baseUrl } from '../../functions/baseUrl';
import { useNavigate } from 'react-router-dom';

export default function MyHomeServices() {
    const [currData] = useFetch(`${baseUrl}/home-services`);
    const navigate = useNavigate();

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
                                            <h3 className='cursorPointer' onClick={()=>navigate(`services/${service?.id}`)}>
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
                </div>
            </div>
        </div>
    )
}
