import { NavLink } from 'react-router-dom';
import styles from './serviceCard.module.css';
import PropTypes from 'prop-types';
export default function ServiceCard({ service , index}) {
    return (
        <div className={`${styles.serviceCard__handler} row mb-0 align-items-center`}>
            <div className={`col-md-6 px-0 ${((index % 2) === 0) ? 'order-0' : 'order-1'}`}>
                <img src={service?.image} alt={service?.title} />
            </div>
            <div className={`col-md-6 ps-5 ${styles.cardInfo} ${((index % 2) === 0) ? 'order-1' : 'order-0'}`}>
                <h5>
                    {service?.title}
                </h5>
                <p>
                    {service?.description}
                </p>
                <ul className={`${styles.cardSubLinks}`}>
                    {
                        service?.subServices?.map((subServ, idx) => (
                            <li className={`${styles.SubLink}`} key={idx}>
                                <NavLink to={`/services/${subServ?.id}`} className={'nav-link'}>
                                    <i className="bi bi-arrow-right-circle"></i>
                                    {subServ.title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
    index: PropTypes.number,
};