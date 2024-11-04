import AllInsightsSec from '../../components/allInsightsSec/AllInsightsSec';
import bgImage from '../../assets/home-overview/a.jpg';
import MyHeroImage from '../../components/myHeroImageSec/MyHeroImage';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import MyLoader from '../../components/myLoaderSec/MyLoader';

export default function InsightsPage() {
    const [currData, loading] = useFetch(`${baseUrl}/all-blogs`);

    if (loading) {
        return <MyLoader />;
    };

    return (
        <>
            <MyHeroImage title={`Business Insights`} subTit={'Explore Market Insights & Reports'} bgImage={bgImage} />
            <AllInsightsSec currData={currData}/>
        </>
    );
};
