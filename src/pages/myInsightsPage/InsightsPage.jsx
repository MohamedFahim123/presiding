import MyInsightsFiltersBar from '../../components/myInsightsFiltersBar/MyInsightsFiltersBar';
import AllInsightsSec from '../../components/allInsightsSec/AllInsightsSec';
import { useState } from 'react';
import bgImage from '../../assets/home-insights/8be20325d2160343393bf6f345b1b8fb.jpeg';
import MyHeroImage from '../../components/myHeroImageSec/MyHeroImage';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import MyLoader from '../../components/myLoaderSec/MyLoader';

export default function InsightsPage() {
    const [filter, setFilter] = useState({
        blog_category_id: '',
        industry_id: '',
    });
    const [currData, loading] = useFetch(`${baseUrl}/all-blogs`);

    if (loading) {
        return <MyLoader />;
    };

    return (
        <>
            <MyHeroImage title={`Presiding INSIGHTS`} subTit={'Explore Market Insights & Reports'} bgImage={bgImage} />
            <MyInsightsFiltersBar setFilter={setFilter} filter={filter} />
            <AllInsightsSec currData={currData}/>
        </>
    );
};
