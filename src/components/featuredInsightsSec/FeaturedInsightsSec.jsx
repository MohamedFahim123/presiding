import InsightsMainCard from "../insightsMainCard/InsightsMainCard";
import testImg1 from '../../assets/insightsPage/113e6b05928d646203f8287d9edc0bed.jpeg';
import testImg2 from '../../assets/insightsPage/638f8f086209c17bb4918a1e5c7c4614.jpeg';
import testImg3 from '../../assets/insightsPage/693199e6f913b477f9c9a9c6d1838241.jpeg';
import testImg4 from '../../assets/insightsPage/6b324432e8e289d239130a8aa5bdf1a8.jpeg';
import styles from './featuredInsightsSec.module.css';
import PropTypes from "prop-types";

export default function FeaturedInsightsSec({ isSingleInsight }) {
    const featuredInsights = [
        { id: 1, imgSrc: testImg1, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 2, imgSrc: testImg2, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 3, imgSrc: testImg3, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
        { id: 4, imgSrc: testImg4, head: 'FULL REPORT', heading: "The Role of AI in Business Consultation", time: "09.10.2024" },
    ];

    return (
        <div className={`section__handler`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 mb-5">
                        {
                            isSingleInsight ?
                                <div className={styles.singleInsightHeader}>
                                    <h3 className='text-center'>Explore Market Insights</h3>
                                </div>
                                :
                                <div className="header_ofSec text-start">
                                    <h3>Featured insights</h3>
                                </div>
                        }
                    </div>
                    {
                        featuredInsights?.map(insight => (
                            <div key={insight?.id} className="col-lg-3 col-md-4">
                                <InsightsMainCard
                                    imgSrc={insight?.imgSrc}
                                    head={insight?.head}
                                    heading={insight?.heading}
                                    time={insight?.time}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

FeaturedInsightsSec.propTypes = {
    isSingleInsight: PropTypes.bool.isRequired,
};