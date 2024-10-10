import BreakingSectionLine from "../../components/breakingSectionLine/BreakingSectionLine";
import FeaturedInsightsSec from "../../components/featuredInsightsSec/FeaturedInsightsSec";
import SingleInsightsDescriptionSec from "../../components/singleInsightsDescriptionSec/SingleInsightsDescriptionSec";
import SingleInsightsHeroSec from "../../components/singleInsightsHeroSec/SingleInsightsHeroSec";

export default function SingleInsightPage() {

    return (
        <>
            <SingleInsightsHeroSec />
            <SingleInsightsDescriptionSec 
                head={'How Businesses Can Thrive in a Transforming Economy'}
                disc={'Saudi Arabia is experiencing a period of rapid transformation, driven by the ambitious Vision 2030 initiative. This comprehensive strategy aims to diversify the Kingdom’s economy, reduce its reliance on oil, and position it as a global leader in sectors like technology, tourism, healthcare, and renewable energy. For businesses, both local and international, this shift presents unparalleled opportunities to unlock new levels of growth and success. In this article, we’ll explore how businesses in Saudi Arabia can unlock their full potential by leveraging strategic initiatives, embracing innovation, and aligning with the broader goals of Vision 2030.'}
            />
            <BreakingSectionLine text="PUBLICATIONS" />
            <FeaturedInsightsSec isSingleInsight={true} />
        </>
    );
};
