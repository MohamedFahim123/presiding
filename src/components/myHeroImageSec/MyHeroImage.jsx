import PropTypes from 'prop-types';
import styles from './myHeroImage.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function MyHeroImage({ btnNavigation, backGroundOverLoay, itemsPosition, title, subTit, actions, btnName, linkName, linkDistenation, bgImage, bgPosition, height }) {
    const navigate = useNavigate();
    return (
        <div className={`${styles.heroImage__handler}`} style={bgImage && { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: bgPosition ? bgPosition : 'top', alignItems: itemsPosition ? itemsPosition : 'end', height: height ? height : '60vh' }}>
            <div className={`${styles.overlay}`} style={{ background: backGroundOverLoay ? backGroundOverLoay : 'rgba(0, 0, 0, 0.365)' }}></div>
            <div className="container">
                <div className={`${styles.heroImage__text}`}>
                    <div >
                        <h2>
                            {title}
                        </h2>
                        <p>
                            {subTit}
                        </p>
                    </div>
                    {
                        actions === true &&
                        <div className={`${styles.heroImage__actions}`}>
                            <button onClick={() => navigate(btnNavigation)}>
                                {btnName}
                            </button>
                            {
                                (linkDistenation && linkName) &&
                                <h5>
                                    <NavLink to={`${linkDistenation}`} className={'nav-link'}>
                                        {linkName}
                                    </NavLink>
                                </h5>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
MyHeroImage.propTypes = {
    title: PropTypes.string.isRequired,
    subTit: PropTypes.string,
    actions: PropTypes.bool,
    btnName: PropTypes.string,
    linkName: PropTypes.string,
    bgImage: PropTypes.string,
    linkDistenation: PropTypes.string,
    btnNavigation: PropTypes.string,
    bgPosition: PropTypes.string,
    itemsPosition: PropTypes.string,
    height: PropTypes.string,
    backGroundOverLoay: PropTypes.string,
};