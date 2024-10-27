import PropTypes from "prop-types";
import styles from './signleInsightDescriptionSec.module.css';

export default function SingleInsightsDescriptionSec({ head, disc }) {
    return (
        <div className={`section__handler ${styles.singleInsightDescSec}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            {head ? head : ''}
                        </h2>
                        <p>
                            <div dangerouslySetInnerHTML={{ __html: disc }} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleInsightsDescriptionSec.propTypes = {
    head: PropTypes.string,
    disc: PropTypes.string,
};