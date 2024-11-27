import styles from './singleInsightsHeroSec.module.css';
import viewIcon from '../../assets/insightsPage/fluent-mdl2_view.svg';
import downloadIcon from '../../assets/insightsPage/material-symbols-light_download-sharp.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function SingleInsightsHeroSec({ bgImage, title, attachment }) {
    const [pdfUrl] = useState(attachment);
    const handleDownload = async () => {
        try {
            const response = await fetch(attachment);
            if (!response.ok) {
                throw new Error(`Failed to fetch file. Status: ${response.status}`);
            };
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${title || 'Document'}-Full-Report.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            toast.error('Error downloading the file.');
        };
    };


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
                                    onClick={() => window.open(pdfUrl, '_blank')}
                                >
                                    <img src={viewIcon} alt="View icon" className="icon" />
                                    View Online
                                </button>
                                <button onClick={handleDownload} className={styles.veiwBtn}>
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
                                backgroundImage: `url(${bgImage || 'https://via.placeholder.com/600x400'})`,
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
