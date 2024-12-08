import PropTypes from "prop-types";
import InsightsMainCard from "../insightsMainCard/InsightsMainCard";
import styles from './featuredInsightsSec.module.css';

export default function FeaturedInsightsSec({ isSingleInsight, currData }) {
    return (
        <>
            {
                currData?.length > 0 &&
                <div className={`section__handler`}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 mb-5">
                                {
                                    isSingleInsight ?
                                        <div className={styles.singleInsightHeader}>
                                            <h3 className='text-center'>Other Business Insights</h3>
                                        </div>
                                        :
                                        <div className="header_ofSec text-start">
                                            <h3>Featured insights</h3>
                                        </div>
                                }
                            </div>
                            {
                                currData?.slice(0, 3).map(insight => (
                                    <div key={insight?.id} className="col-lg-4 col-md-4">
                                        <InsightsMainCard
                                            featuredCard={true}
                                            insight={insight}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

FeaturedInsightsSec.propTypes = {
    isSingleInsight: PropTypes.bool.isRequired,
    currData: PropTypes.any,
};