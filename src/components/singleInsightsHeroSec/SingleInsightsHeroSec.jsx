import styles from './singleInsightsHeroSec.module.css';
import viewIcon from '../../assets/insightsPage/fluent-mdl2_view.svg';
import downloadIcon from '../../assets/insightsPage/material-symbols-light_download-sharp.svg';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export default function SingleInsightsHeroSec({ bgImage, title }) {
    const showDemoNotice = () => toast('Report files are not included in this UI-only preview.');


    return (
        <div className={`${styles.singleInsight__heroSec}`}>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-md-6 d-flex flex-column justify-center align-items-start ps-5 pt-4">
                        <div className={`${styles.text__container}`}>
                            <h1 className="ps-5 pt-3 text-white">
                                {title || 'Untitled Insight'}
                            </h1>
                            <div className={`${styles.btnContainer} ps-4 mt-5`}>
                                <button
                                    className={`${styles.downloadBtn} btn btn-primary d-flex align-items-center gap-2`}
                                    onClick={showDemoNotice}
                                >
                                    <img src={viewIcon} alt="View icon" className="icon" />
                                    View Online
                                </button>
                                <button onClick={showDemoNotice} className={styles.veiwBtn}>
                                    Download Full Report
                                    <img src={downloadIcon} alt="download icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 px-0 d-none d-md-block`}>
                        <div
                            className={`${styles.imgContainer} w-100 h-100`}
                            style={{
                                backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SingleInsightsHeroSec.propTypes = {
    bgImage: PropTypes.string,
    title: PropTypes.string,
    attachment: PropTypes.string,
};
