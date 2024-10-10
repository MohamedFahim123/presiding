import { NavLink } from 'react-router-dom';
import styles from './serviceCard.module.css';
import PropTypes from 'prop-types';
export default function ServiceCard({ cardImg, cardTitle, cardDesc, subLinks, subServLink }) {
    return (
        <div className={`${styles.serviceCard__handler}`}>
            <img src={cardImg} alt={cardTitle} />
            <div className={`${styles.cardInfo}`}>
                <h5>
                    {cardTitle}
                </h5>
                <p>
                    {cardDesc}
                </p>
                <ul className={`${styles.cardSubLinks}`}>
                    {
                        subLinks?.map((el) => (
                            <li className={`${styles.SubLink}`} key={el.subServId}>
                                <NavLink to={subServLink} className={'nav-link'}>
                                    <i className="bi bi-arrow-right-circle"></i>
                                    {el.SubServName}
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
    cardImg: PropTypes.string.isRequired, 
    cardTitle: PropTypes.string.isRequired, 
    cardDesc: PropTypes.string.isRequired, 
    subLinks: PropTypes.string.isRequired, 
    subServLink: PropTypes.string.isRequired,
};