import PropTypes from 'prop-types';
import InsightsMainCard from '../insightsMainCard/InsightsMainCard';

export default function AllInsightsSec({currData}) {
    return (
        <div className="section__handler sectionBgLight">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        currData?.blogs?.map(insight => (
                            <div key={insight?.id} className="col-md-4">
                                <InsightsMainCard
                                    insight={insight}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
AllInsightsSec.propTypes = {
    currData: PropTypes.any,
}