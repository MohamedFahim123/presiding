import styles from './myServicesCards.module.css';
import ServiceCard from '../serviceCardSec/ServiceCard';
import PropTypes from 'prop-types';

export default function MyServicesCards({ currData }) {
    return (
        <div className={`${styles.myServicesCards__handler}`}>
            <div className="container-fluid">
                <div className="row justify-content-center mt-4">
                    {
                        currData?.slice(0, 4)?.map((service, idx) => (
                            <div key={service?.id} className="col-12">
                                <ServiceCard service={service} index={idx} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

MyServicesCards.propTypes = {
    currData: PropTypes.array,
    setCurrentPage: PropTypes.func,
};