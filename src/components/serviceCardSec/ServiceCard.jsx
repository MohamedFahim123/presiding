import { NavLink } from 'react-router-dom';
import styles from './serviceCard.module.css';
import PropTypes from 'prop-types';
export default function ServiceCard({service }) {
    return (
        <div className={`${styles.serviceCard__handler}`}>
            <img src={service?.image} alt={service?.title} />
            <div className={`${styles.cardInfo}`}>
                <h5>
                    {service?.title}
                </h5>
                <p>
                    {service?.description}
                </p>
                <ul className={`${styles.cardSubLinks}`}>
                    {
                        service?.subServices?.map((subServ) => (
                            <li className={`${styles.SubLink}`} key={subServ.subServId}>
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
};