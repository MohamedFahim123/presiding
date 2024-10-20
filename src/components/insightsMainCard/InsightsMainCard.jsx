import PropTypes from 'prop-types';
import styles from './insightsMainCard.module.css';
import testImg4 from '../../assets/insightsPage/6b324432e8e289d239130a8aa5bdf1a8.jpeg';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../functions/scrollToTop';

export default function InsightsMainCard({ insight ,featuredCard }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => {
            scrollToTop();
            navigate(`/insights/${insight?.id}`);
        }} className={`${styles.isnightsCard}`} style={{ backgroundImage: `url(${insight?.image ? insight?.image : testImg4})`,minHeight: featuredCard ? '500px' : '350px' }}>
            <div className={`${styles.insightsCard__body}`}>
                <p>{insight?.title ? insight?.title : ''}</p>
                <div className={styles.animatedContent}>
                    <h4>{insight?.description ? insight?.description?.slice(0, 50) + '....' : ''}</h4>
                    <small>{insight?.created_at ? insight?.created_at : ''}</small>
                </div>
            </div>
        </div>
    );
};
InsightsMainCard.propTypes = {
    insight: PropTypes.object.isRequired,
    featuredCard: PropTypes.bool,
};