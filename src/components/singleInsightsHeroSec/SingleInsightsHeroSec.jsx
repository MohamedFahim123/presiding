import styles from './singleInsightsHeroSec.module.css';
import viewIcon from '../../assets/insightsPage/fluent-mdl2_view.svg';
import downloadIcon from '../../assets/insightsPage/material-symbols-light_download-sharp.svg';
import PropTypes from 'prop-types';

export default function SingleInsightsHeroSec({ bgImage, created_at ,title, attachment }) {
    return (
        <div className={`section__handler ${styles.singleInsight__heroSec}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.text__container}>
                            <p>Full report</p>
                            <p>{created_at ? created_at : ''}</p>
                            <h1>{title ? title : ''}</h1>
                            <div className={styles.btnContainer}>
                                <button className={styles.veiwBtn}>
                                    View Online
                                    <img src={viewIcon} alt="view icon" />
                                </button>
                                <a className={styles.downloadBtn} href={attachment} download="attachment.pdf">
                                    Download Full Report
                                    <img src={downloadIcon} alt="download icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6`}>
                        <div className={`${styles.imgContainer}`} style={{ backgroundImage: `url(${bgImage ? bgImage : ''})`, backgroundSize: 'cover' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleInsightsHeroSec.propTypes = {
    bgImage: PropTypes.string,
    title: PropTypes.string,
    attachment: PropTypes.string,
    created_at: PropTypes.string,
}