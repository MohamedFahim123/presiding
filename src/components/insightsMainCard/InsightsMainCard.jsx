import PropTypes from 'prop-types';
import styles from './insightsMainCard.module.css';
import testImg4 from '../../assets/insightsPage/6b324432e8e289d239130a8aa5bdf1a8.jpeg';
import { useNavigate } from 'react-router-dom';

export default function InsightsMainCard({imgSrc,head,heading,time}) {
    const navigate = useNavigate();

    return (
        <div onClick={()=> navigate('/insights/:singleInsight')} className={`${styles.isnightsCard}`} style={{ backgroundImage: `url(${imgSrc ? imgSrc : testImg4})`}}>
            <div className={`${styles.insightsCard__body}`}>
                <p>{head ? head : ''}</p>
                <div className={styles.animatedContent}>
                    <h4>{heading ? heading : ''}</h4>
                    <small>{time ? time : ''}</small>
                </div>
            </div>
        </div>
    );
};
InsightsMainCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};