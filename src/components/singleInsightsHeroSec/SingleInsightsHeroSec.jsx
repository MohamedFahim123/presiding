import styles from './singleInsightsHeroSec.module.css';
import viewIcon from '../../assets/insightsPage/fluent-mdl2_view.svg';
import downloadIcon from '../../assets/insightsPage/material-symbols-light_download-sharp.svg';

export default function SingleInsightsHeroSec() {
    return (
        <div className={`section__handler ${styles.singleInsight__heroSec}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.text__container}>
                            <p>Full report</p>
                            <h1>Unlock full Potential in Saudi</h1>
                            <div className={styles.btnContainer}>
                                <button className={styles.veiwBtn}>
                                    View Online 
                                    <img src={viewIcon} alt="view icon" />
                                </button>
                                <button className={styles.downloadBtn}>
                                    Download Full Report
                                    <img src={downloadIcon} alt="download icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6`}>
                        <div className={`${styles.imgContainer}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
