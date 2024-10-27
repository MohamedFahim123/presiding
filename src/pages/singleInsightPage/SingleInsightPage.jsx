import { useParams } from "react-router-dom";
import BreakingSectionLine from "../../components/breakingSectionLine/BreakingSectionLine";
import FeaturedInsightsSec from "../../components/featuredInsightsSec/FeaturedInsightsSec";
import SingleInsightsDescriptionSec from "../../components/singleInsightsDescriptionSec/SingleInsightsDescriptionSec";
import SingleInsightsHeroSec from "../../components/singleInsightsHeroSec/SingleInsightsHeroSec";
import { baseUrl } from "../../functions/baseUrl";
import { useFetch } from "../../hooks/useFetch";
import MyLoader from "../../components/myLoaderSec/MyLoader";

export default function SingleInsightPage() {
    const { singleInsight } = useParams();
    const [currData, loading] = useFetch(`${baseUrl}/show-blog/${singleInsight}`);

    if (loading) {
        return <MyLoader />;
    };

    return (
        <>
            <SingleInsightsHeroSec title={currData?.blog?.title} attachment={currData?.blog?.attachment} bgImage={currData?.blog?.image} />
            <SingleInsightsDescriptionSec
                head={currData?.blog?.description}
                disc={currData?.blog?.body}
            />
            <BreakingSectionLine text="PUBLICATIONS" />
            <FeaturedInsightsSec currData={currData?.relatedBlogs} isSingleInsight={true} />
        </>
    );
};
