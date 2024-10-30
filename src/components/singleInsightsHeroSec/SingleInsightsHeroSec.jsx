import styles from './singleInsightsHeroSec.module.css';
import viewIcon from '../../assets/insightsPage/fluent-mdl2_view.svg';
import downloadIcon from '../../assets/insightsPage/material-symbols-light_download-sharp.svg';
import PropTypes from 'prop-types';
// import imgBack from '../../assets/home-insights/cover1.jpg';
// style={{backgroundImage: `url(${})` ,backgroundPosition: 'top',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}
export default function SingleInsightsHeroSec({ bgImage, title, attachment }) {
    return (
        <div className={`${styles.singleInsight__heroSec}`} >
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-md-6 ps-5 pt-4">
                        <div className={styles.text__container}>
                            <h1 className='ps-5 pt-3'>{title ? title : ''}</h1>
                            <div className={`${styles.btnContainer} ps-4 mt-5`}>
                                <button className={styles.downloadBtn}>
                                    View Online
                                    <img src={viewIcon} alt="view icon" />
                                </button>
                                <a className={styles.veiwBtn} href={attachment} download="attachment.pdf">
                                    Download Full Report
                                    <img src={downloadIcon} alt="download icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 px-0`}>
                        <div className={`${styles.imgContainer} w-100`} style={{ backgroundImage: `url(${bgImage ? bgImage : ''})`, backgroundSize: 'cover' }}></div>
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
}